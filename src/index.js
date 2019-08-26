require('dotenv').load();
const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
import resolvers from "./resolvers";

const typeDefs = __dirname+'/built-schema.graphql';
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs:  __dirname+'/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/alejox31-67c020/avilena/avilena-stgf',
      secret: 'mysecret123',
    }),
  }),
    playground:true,
});

server.start({ port: 3000 }).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});
