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
        getUser: (_, args, context, info) => {
            return context.db.query.user(
                {
                    where: {
                        id: args.id,
                    },
                },
                info,
            )
        },
        getNews:async (_, args, context, info) => {
            const news = await context.db.query.newses({});
            return news[Math.floor(Math.random() * news.length)];
        },
        currentUser: (_, args, context, info) => {
            return getUser(context);
        },
        login: async (_, args, ctx ,info) => {
            const users = await ctx.db.query.users({where: {email: args.email}});
            const user = users.pop();
            if (!user) {
                throw new Error(`No such user found for email: ${args.email}`)
            }
            const valid = await bcrypt.compare(args.password, user.password);
            if (!valid)  {
                throw new Error('Invalid password')
            }
            delete user.password;
            const authorization = await jwt.sign(user, "secret123", {expiresIn: "3m"});
            return {
                authorization,
                user,
            }
        },
    },
    Mutation: {
        signup: async (_, args, context, info) => {
            const password = await bcrypt
                .hash(args.phone+args.address, 10);
            const user = await context.db.mutation.createUser(
                {
                    data: {
                        username: args.username,
                        email: args.email,
                        phone:args.phone,
                        address:args.address,
                        password,
                    },
                });
            const authorization = await jwt.sign(user, "secret123", {expiresIn:"30m"});
            return { authorization, user }
        },
    },
};

export default resolvers;