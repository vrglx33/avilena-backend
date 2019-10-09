import {getUser} from "./helpers";

const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');

const asyncForeEach = async(array, callback) => {
    for (let index = 0; index < (array.length > 7 ? 7:array.length); index++) {
        await callback(array[index], index, array);
    }
};

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
        getProductType:async (parent, { id }, {context}) => {
            return await context.prisma.productTypes();
        },
        getCategoryProducts: async (parent, { id }, {context}) => {
            return await context.prisma.productType({id}).products();
        },
        currentUser: (parent, { email,password }, context) => {
            return getUser(context);
        },
        login: async (parent, { email,password }, {context}) => {
            const user = await context.user({email});
            if (!user) {
                throw new Error(`No such user found for email: ${email}`)
            }
            const valid = await bcrypt.compare(password, password);
            if (!valid)  {
                throw new Error('Invalid password')
            }
            delete user.password;
            const authorization = await jwt.sign(user, "secret123");
            return {
                authorization,
                user,
            }
        },
    },
    Mutation: {
        signup: async (parent, { email, username, phone, address }, {context}) => {
            const temporaryPassword = Math.floor(Math.random()*1000 + 1000).toString();

            console.log(temporaryPassword);

            const password = await bcrypt
                .hash(temporaryPassword, 10);
            const user = await context.prisma.createUser(
                {
                    username,
                    email,
                    phone,
                    address,
                    password,
                });
            const authorization = await jwt.sign(user, "secret123");
            return { authorization, user }
        },
    },
};

export default resolvers;