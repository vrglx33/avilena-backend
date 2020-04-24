import {getUser} from "./helpers";

const simplecrypt = require("simplecrypt");
const jwt = require('jsonwebtoken');

const sc = simplecrypt();

const asyncForeEach = async(array, callback) => {
    for (let index = 0; index < (array.length > 7 ? 7:array.length); index++) {
        await callback(array[index], index, array);
    }
};

const hashCode = s => s.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0);


const resolvers = {
    Query: {
        getUser: (parent, { id }, {context}) => {
            return context.prisma.user(
                {
                    where: {
                        id: args.id,
                    },
                },
            )
        },
        getStates:async (parent, args, {context}) => {
            return await context.prisma.states();
        },
        getCities:async (parent, {id}, {context}) => {
            return await context.prisma.cities({where:{state:{id}}});
        },
        getProductType:async (parent, { id }, {context}) => {
            return await context.prisma.productTypes();
        },
        getCategoryProducts: async (parent, { id }, {context}) => {
            return await context.prisma.productType({id}).products();
        },
        currentUser: (parent, { email,password }, context) => {
            return getUser(context);
        },
        getOrderDetails: async (parent, { id }, {context}) => {
            return await context.prisma.order({ id:id }).products()
        },
        getOrders: async (parent, { user }, {context}) => {
            return await context.prisma.user({ id:user }).orders();
        },
        getAllOrders: async (parent, { user }, {context}) => {
            return await context.prisma.orders();
        },
        login: async (parent, { email,password }, {context}) => {
            const user = await context.prisma.users({where:{email}});
            if (!user[0]) {
                throw new Error(`No such user found for email: ${email}`)
            }
            const encriptedPassword = String(hashCode(password));
            if (encriptedPassword !== user[0].password)  {
                throw new Error('Contraseña Inválida')
            }
            delete user[0].password;
            const authorization = await jwt.sign(user[0], "secret123");
            return {
                authorization,
                user:user[0],
            }
        },
    },
    Mutation: {
        signup: async (parent, { email, username, phone, address, password, city }, {context}) => {
            const usr = await context.prisma.users({where:{email}});
            if (usr.length) {
                throw new Error(`Ya existe un usuario con este correo: ${email}`)
            }
            const temporaryPassword = password || Math.floor(Math.random()*1000 + 1000).toString();
            const pass = String(hashCode(temporaryPassword));
            const user = await context.prisma.createUser(
                {
                    username,
                    email,
                    phone,
                    address,
                    password: pass,
                    city: {
                        connect:{
                            id: city
                        }
                    }
                });
            delete user.password;
            const authorization = await jwt.sign(user, "secret123");
            return { authorization, user }
        },
        createOrder: async (parent, { status, products, user }, {context}) => {
            const formattedProducts = products.map((product) => {
                product.product = {connect:{id:product.product}};
                return product;
            });
            return await context.prisma.createOrder({
                status,
                products: {
                    create: formattedProducts
                },
                user: {
                    connect: {id: user}
                }
            });
        }
    },
};

export default resolvers;
