require('dotenv').load();
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated');
import resolvers from "./resolvers";

const typeDefs = __dirname+'/schema.graphql';
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    context: {
      prisma,
    },
  }),
    playground:false,
});

server.start({ port: 3001 }).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});
