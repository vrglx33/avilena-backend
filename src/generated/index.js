"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "ProductType",
    embedded: false
  },
  {
    name: "News",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/alejox31-67c020/avilena/avilena-stgf`,
  secret: `mysecret123`
});
exports.prisma = new exports.Prisma();
