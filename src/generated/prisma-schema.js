module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.6). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateNews {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateProductOrder {
  count: Int!
}

type AggregateProductType {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createNews(data: NewsCreateInput!): News!
  updateNews(data: NewsUpdateInput!, where: NewsWhereUniqueInput!): News
  updateManyNewses(data: NewsUpdateManyMutationInput!, where: NewsWhereInput): BatchPayload!
  upsertNews(where: NewsWhereUniqueInput!, create: NewsCreateInput!, update: NewsUpdateInput!): News!
  deleteNews(where: NewsWhereUniqueInput!): News
  deleteManyNewses(where: NewsWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createProductOrder(data: ProductOrderCreateInput!): ProductOrder!
  updateProductOrder(data: ProductOrderUpdateInput!, where: ProductOrderWhereUniqueInput!): ProductOrder
  updateManyProductOrders(data: ProductOrderUpdateManyMutationInput!, where: ProductOrderWhereInput): BatchPayload!
  upsertProductOrder(where: ProductOrderWhereUniqueInput!, create: ProductOrderCreateInput!, update: ProductOrderUpdateInput!): ProductOrder!
  deleteProductOrder(where: ProductOrderWhereUniqueInput!): ProductOrder
  deleteManyProductOrders(where: ProductOrderWhereInput): BatchPayload!
  createProductType(data: ProductTypeCreateInput!): ProductType!
  updateProductType(data: ProductTypeUpdateInput!, where: ProductTypeWhereUniqueInput!): ProductType
  updateManyProductTypes(data: ProductTypeUpdateManyMutationInput!, where: ProductTypeWhereInput): BatchPayload!
  upsertProductType(where: ProductTypeWhereUniqueInput!, create: ProductTypeCreateInput!, update: ProductTypeUpdateInput!): ProductType!
  deleteProductType(where: ProductTypeWhereUniqueInput!): ProductType
  deleteManyProductTypes(where: ProductTypeWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type News {
  id: ID!
  title: String!
  text: String!
  image: String!
}

type NewsConnection {
  pageInfo: PageInfo!
  edges: [NewsEdge]!
  aggregate: AggregateNews!
}

input NewsCreateInput {
  id: ID
  title: String!
  text: String!
  image: String!
}

type NewsEdge {
  node: News!
  cursor: String!
}

enum NewsOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  image_ASC
  image_DESC
}

type NewsPreviousValues {
  id: ID!
  title: String!
  text: String!
  image: String!
}

type NewsSubscriptionPayload {
  mutation: MutationType!
  node: News
  updatedFields: [String!]
  previousValues: NewsPreviousValues
}

input NewsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NewsWhereInput
  AND: [NewsSubscriptionWhereInput!]
  OR: [NewsSubscriptionWhereInput!]
  NOT: [NewsSubscriptionWhereInput!]
}

input NewsUpdateInput {
  title: String
  text: String
  image: String
}

input NewsUpdateManyMutationInput {
  title: String
  text: String
  image: String
}

input NewsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  AND: [NewsWhereInput!]
  OR: [NewsWhereInput!]
  NOT: [NewsWhereInput!]
}

input NewsWhereUniqueInput {
  id: ID
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  products(where: ProductOrderWhereInput, orderBy: ProductOrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductOrder!]
  user: User!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  id: ID
  products: ProductOrderCreateManyWithoutOrdersInput
  user: UserCreateOneInput!
}

input OrderCreateManyWithoutProductsInput {
  create: [OrderCreateWithoutProductsInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateWithoutProductsInput {
  id: ID
  user: UserCreateOneInput!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OrderPreviousValues {
  id: ID!
  updatedAt: DateTime!
  createdAt: DateTime!
}

input OrderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [OrderScalarWhereInput!]
  OR: [OrderScalarWhereInput!]
  NOT: [OrderScalarWhereInput!]
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  products: ProductOrderUpdateManyWithoutOrdersInput
  user: UserUpdateOneRequiredInput
}

input OrderUpdateManyWithoutProductsInput {
  create: [OrderCreateWithoutProductsInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutProductsInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutProductsInput!]
  deleteMany: [OrderScalarWhereInput!]
}

input OrderUpdateWithoutProductsDataInput {
  user: UserUpdateOneRequiredInput
}

input OrderUpdateWithWhereUniqueWithoutProductsInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutProductsDataInput!
}

input OrderUpsertWithWhereUniqueWithoutProductsInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutProductsDataInput!
  create: OrderCreateWithoutProductsInput!
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  products_every: ProductOrderWhereInput
  products_some: ProductOrderWhereInput
  products_none: ProductOrderWhereInput
  user: UserWhereInput
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  name: String!
  size: String!
  type: ProductType!
  productOrders(where: ProductOrderWhereInput, orderBy: ProductOrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductOrder!]
  fileName: String!
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  id: ID
  name: String!
  size: String!
  type: ProductTypeCreateOneWithoutProductsInput!
  productOrders: ProductOrderCreateManyWithoutProductInput
  fileName: String!
}

input ProductCreateManyWithoutTypeInput {
  create: [ProductCreateWithoutTypeInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateOneWithoutProductOrdersInput {
  create: ProductCreateWithoutProductOrdersInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutProductOrdersInput {
  id: ID
  name: String!
  size: String!
  type: ProductTypeCreateOneWithoutProductsInput!
  fileName: String!
}

input ProductCreateWithoutTypeInput {
  id: ID
  name: String!
  size: String!
  productOrders: ProductOrderCreateManyWithoutProductInput
  fileName: String!
}

type ProductEdge {
  node: Product!
  cursor: String!
}

type ProductOrder {
  id: ID!
  name: String!
  product: Product!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  qty: Int!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  size_ASC
  size_DESC
  fileName_ASC
  fileName_DESC
}

type ProductOrderConnection {
  pageInfo: PageInfo!
  edges: [ProductOrderEdge]!
  aggregate: AggregateProductOrder!
}

input ProductOrderCreateInput {
  id: ID
  name: String!
  product: ProductCreateOneWithoutProductOrdersInput!
  orders: OrderCreateManyWithoutProductsInput
  qty: Int!
}

input ProductOrderCreateManyWithoutOrdersInput {
  create: [ProductOrderCreateWithoutOrdersInput!]
  connect: [ProductOrderWhereUniqueInput!]
}

input ProductOrderCreateManyWithoutProductInput {
  create: [ProductOrderCreateWithoutProductInput!]
  connect: [ProductOrderWhereUniqueInput!]
}

input ProductOrderCreateWithoutOrdersInput {
  id: ID
  name: String!
  product: ProductCreateOneWithoutProductOrdersInput!
  qty: Int!
}

input ProductOrderCreateWithoutProductInput {
  id: ID
  name: String!
  orders: OrderCreateManyWithoutProductsInput
  qty: Int!
}

type ProductOrderEdge {
  node: ProductOrder!
  cursor: String!
}

enum ProductOrderOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  qty_ASC
  qty_DESC
}

type ProductOrderPreviousValues {
  id: ID!
  name: String!
  qty: Int!
}

input ProductOrderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  qty: Int
  qty_not: Int
  qty_in: [Int!]
  qty_not_in: [Int!]
  qty_lt: Int
  qty_lte: Int
  qty_gt: Int
  qty_gte: Int
  AND: [ProductOrderScalarWhereInput!]
  OR: [ProductOrderScalarWhereInput!]
  NOT: [ProductOrderScalarWhereInput!]
}

type ProductOrderSubscriptionPayload {
  mutation: MutationType!
  node: ProductOrder
  updatedFields: [String!]
  previousValues: ProductOrderPreviousValues
}

input ProductOrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductOrderWhereInput
  AND: [ProductOrderSubscriptionWhereInput!]
  OR: [ProductOrderSubscriptionWhereInput!]
  NOT: [ProductOrderSubscriptionWhereInput!]
}

input ProductOrderUpdateInput {
  name: String
  product: ProductUpdateOneRequiredWithoutProductOrdersInput
  orders: OrderUpdateManyWithoutProductsInput
  qty: Int
}

input ProductOrderUpdateManyDataInput {
  name: String
  qty: Int
}

input ProductOrderUpdateManyMutationInput {
  name: String
  qty: Int
}

input ProductOrderUpdateManyWithoutOrdersInput {
  create: [ProductOrderCreateWithoutOrdersInput!]
  delete: [ProductOrderWhereUniqueInput!]
  connect: [ProductOrderWhereUniqueInput!]
  set: [ProductOrderWhereUniqueInput!]
  disconnect: [ProductOrderWhereUniqueInput!]
  update: [ProductOrderUpdateWithWhereUniqueWithoutOrdersInput!]
  upsert: [ProductOrderUpsertWithWhereUniqueWithoutOrdersInput!]
  deleteMany: [ProductOrderScalarWhereInput!]
  updateMany: [ProductOrderUpdateManyWithWhereNestedInput!]
}

input ProductOrderUpdateManyWithoutProductInput {
  create: [ProductOrderCreateWithoutProductInput!]
  delete: [ProductOrderWhereUniqueInput!]
  connect: [ProductOrderWhereUniqueInput!]
  set: [ProductOrderWhereUniqueInput!]
  disconnect: [ProductOrderWhereUniqueInput!]
  update: [ProductOrderUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [ProductOrderUpsertWithWhereUniqueWithoutProductInput!]
  deleteMany: [ProductOrderScalarWhereInput!]
  updateMany: [ProductOrderUpdateManyWithWhereNestedInput!]
}

input ProductOrderUpdateManyWithWhereNestedInput {
  where: ProductOrderScalarWhereInput!
  data: ProductOrderUpdateManyDataInput!
}

input ProductOrderUpdateWithoutOrdersDataInput {
  name: String
  product: ProductUpdateOneRequiredWithoutProductOrdersInput
  qty: Int
}

input ProductOrderUpdateWithoutProductDataInput {
  name: String
  orders: OrderUpdateManyWithoutProductsInput
  qty: Int
}

input ProductOrderUpdateWithWhereUniqueWithoutOrdersInput {
  where: ProductOrderWhereUniqueInput!
  data: ProductOrderUpdateWithoutOrdersDataInput!
}

input ProductOrderUpdateWithWhereUniqueWithoutProductInput {
  where: ProductOrderWhereUniqueInput!
  data: ProductOrderUpdateWithoutProductDataInput!
}

input ProductOrderUpsertWithWhereUniqueWithoutOrdersInput {
  where: ProductOrderWhereUniqueInput!
  update: ProductOrderUpdateWithoutOrdersDataInput!
  create: ProductOrderCreateWithoutOrdersInput!
}

input ProductOrderUpsertWithWhereUniqueWithoutProductInput {
  where: ProductOrderWhereUniqueInput!
  update: ProductOrderUpdateWithoutProductDataInput!
  create: ProductOrderCreateWithoutProductInput!
}

input ProductOrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  product: ProductWhereInput
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  qty: Int
  qty_not: Int
  qty_in: [Int!]
  qty_not_in: [Int!]
  qty_lt: Int
  qty_lte: Int
  qty_gt: Int
  qty_gte: Int
  AND: [ProductOrderWhereInput!]
  OR: [ProductOrderWhereInput!]
  NOT: [ProductOrderWhereInput!]
}

input ProductOrderWhereUniqueInput {
  id: ID
}

type ProductPreviousValues {
  id: ID!
  name: String!
  size: String!
  fileName: String!
}

input ProductScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  size: String
  size_not: String
  size_in: [String!]
  size_not_in: [String!]
  size_lt: String
  size_lte: String
  size_gt: String
  size_gte: String
  size_contains: String
  size_not_contains: String
  size_starts_with: String
  size_not_starts_with: String
  size_ends_with: String
  size_not_ends_with: String
  fileName: String
  fileName_not: String
  fileName_in: [String!]
  fileName_not_in: [String!]
  fileName_lt: String
  fileName_lte: String
  fileName_gt: String
  fileName_gte: String
  fileName_contains: String
  fileName_not_contains: String
  fileName_starts_with: String
  fileName_not_starts_with: String
  fileName_ends_with: String
  fileName_not_ends_with: String
  AND: [ProductScalarWhereInput!]
  OR: [ProductScalarWhereInput!]
  NOT: [ProductScalarWhereInput!]
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

type ProductType {
  id: ID!
  name: String!
  imageLink: String
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

type ProductTypeConnection {
  pageInfo: PageInfo!
  edges: [ProductTypeEdge]!
  aggregate: AggregateProductType!
}

input ProductTypeCreateInput {
  id: ID
  name: String!
  imageLink: String
  products: ProductCreateManyWithoutTypeInput
}

input ProductTypeCreateOneWithoutProductsInput {
  create: ProductTypeCreateWithoutProductsInput
  connect: ProductTypeWhereUniqueInput
}

input ProductTypeCreateWithoutProductsInput {
  id: ID
  name: String!
  imageLink: String
}

type ProductTypeEdge {
  node: ProductType!
  cursor: String!
}

enum ProductTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  imageLink_ASC
  imageLink_DESC
}

type ProductTypePreviousValues {
  id: ID!
  name: String!
  imageLink: String
}

type ProductTypeSubscriptionPayload {
  mutation: MutationType!
  node: ProductType
  updatedFields: [String!]
  previousValues: ProductTypePreviousValues
}

input ProductTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductTypeWhereInput
  AND: [ProductTypeSubscriptionWhereInput!]
  OR: [ProductTypeSubscriptionWhereInput!]
  NOT: [ProductTypeSubscriptionWhereInput!]
}

input ProductTypeUpdateInput {
  name: String
  imageLink: String
  products: ProductUpdateManyWithoutTypeInput
}

input ProductTypeUpdateManyMutationInput {
  name: String
  imageLink: String
}

input ProductTypeUpdateOneRequiredWithoutProductsInput {
  create: ProductTypeCreateWithoutProductsInput
  update: ProductTypeUpdateWithoutProductsDataInput
  upsert: ProductTypeUpsertWithoutProductsInput
  connect: ProductTypeWhereUniqueInput
}

input ProductTypeUpdateWithoutProductsDataInput {
  name: String
  imageLink: String
}

input ProductTypeUpsertWithoutProductsInput {
  update: ProductTypeUpdateWithoutProductsDataInput!
  create: ProductTypeCreateWithoutProductsInput!
}

input ProductTypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  imageLink: String
  imageLink_not: String
  imageLink_in: [String!]
  imageLink_not_in: [String!]
  imageLink_lt: String
  imageLink_lte: String
  imageLink_gt: String
  imageLink_gte: String
  imageLink_contains: String
  imageLink_not_contains: String
  imageLink_starts_with: String
  imageLink_not_starts_with: String
  imageLink_ends_with: String
  imageLink_not_ends_with: String
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  AND: [ProductTypeWhereInput!]
  OR: [ProductTypeWhereInput!]
  NOT: [ProductTypeWhereInput!]
}

input ProductTypeWhereUniqueInput {
  id: ID
}

input ProductUpdateInput {
  name: String
  size: String
  type: ProductTypeUpdateOneRequiredWithoutProductsInput
  productOrders: ProductOrderUpdateManyWithoutProductInput
  fileName: String
}

input ProductUpdateManyDataInput {
  name: String
  size: String
  fileName: String
}

input ProductUpdateManyMutationInput {
  name: String
  size: String
  fileName: String
}

input ProductUpdateManyWithoutTypeInput {
  create: [ProductCreateWithoutTypeInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  set: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutTypeInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutTypeInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateOneRequiredWithoutProductOrdersInput {
  create: ProductCreateWithoutProductOrdersInput
  update: ProductUpdateWithoutProductOrdersDataInput
  upsert: ProductUpsertWithoutProductOrdersInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateWithoutProductOrdersDataInput {
  name: String
  size: String
  type: ProductTypeUpdateOneRequiredWithoutProductsInput
  fileName: String
}

input ProductUpdateWithoutTypeDataInput {
  name: String
  size: String
  productOrders: ProductOrderUpdateManyWithoutProductInput
  fileName: String
}

input ProductUpdateWithWhereUniqueWithoutTypeInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutTypeDataInput!
}

input ProductUpsertWithoutProductOrdersInput {
  update: ProductUpdateWithoutProductOrdersDataInput!
  create: ProductCreateWithoutProductOrdersInput!
}

input ProductUpsertWithWhereUniqueWithoutTypeInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutTypeDataInput!
  create: ProductCreateWithoutTypeInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  size: String
  size_not: String
  size_in: [String!]
  size_not_in: [String!]
  size_lt: String
  size_lte: String
  size_gt: String
  size_gte: String
  size_contains: String
  size_not_contains: String
  size_starts_with: String
  size_not_starts_with: String
  size_ends_with: String
  size_not_ends_with: String
  type: ProductTypeWhereInput
  productOrders_every: ProductOrderWhereInput
  productOrders_some: ProductOrderWhereInput
  productOrders_none: ProductOrderWhereInput
  fileName: String
  fileName_not: String
  fileName_in: [String!]
  fileName_not_in: [String!]
  fileName_lt: String
  fileName_lte: String
  fileName_gt: String
  fileName_gte: String
  fileName_contains: String
  fileName_not_contains: String
  fileName_starts_with: String
  fileName_not_starts_with: String
  fileName_ends_with: String
  fileName_not_ends_with: String
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  news(where: NewsWhereUniqueInput!): News
  newses(where: NewsWhereInput, orderBy: NewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [News]!
  newsesConnection(where: NewsWhereInput, orderBy: NewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NewsConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  productOrder(where: ProductOrderWhereUniqueInput!): ProductOrder
  productOrders(where: ProductOrderWhereInput, orderBy: ProductOrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductOrder]!
  productOrdersConnection(where: ProductOrderWhereInput, orderBy: ProductOrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductOrderConnection!
  productType(where: ProductTypeWhereUniqueInput!): ProductType
  productTypes(where: ProductTypeWhereInput, orderBy: ProductTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductType]!
  productTypesConnection(where: ProductTypeWhereInput, orderBy: ProductTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductTypeConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  news(where: NewsSubscriptionWhereInput): NewsSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  productOrder(where: ProductOrderSubscriptionWhereInput): ProductOrderSubscriptionPayload
  productType(where: ProductTypeSubscriptionWhereInput): ProductTypeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  email: String!
  phone: String!
  address: String!
  password: String!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  email: String!
  phone: String!
  address: String!
  password: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  address_ASC
  address_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  phone: String!
  address: String!
  password: String!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  username: String
  email: String
  phone: String
  address: String
  password: String
}

input UserUpdateInput {
  username: String
  email: String
  phone: String
  address: String
  password: String
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  phone: String
  address: String
  password: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    