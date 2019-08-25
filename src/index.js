import resolvers from "./resolvers";

require('dotenv').load();
const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');



const typeDefs = __dirname+'/built-schema.graphql';
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs:  __dirname+'/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/alejox31-67c020/prisma-demo/dev',
      secret: 'mysecret123',
    }),
  }),
    playground:true,
});

server.start({ port: 3000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
