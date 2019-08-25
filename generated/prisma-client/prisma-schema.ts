export const typeDefs = /* GraphQL */ `type AggregateCognitiveTest {
  count: Int!
}

type AggregateCognitiveTestQuestion {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateForum {
  count: Int!
}

type AggregateQuestionType {
  count: Int!
}

type AggregateResponse {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserDiagnosis {
  count: Int!
}

type AggregateUserResponse {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type CognitiveTest {
  id: ID!
  questions(where: CognitiveTestQuestionWhereInput, orderBy: CognitiveTestQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CognitiveTestQuestion!]
  responses(where: UserResponseWhereInput, orderBy: UserResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserResponse!]
  User: User!
}

type CognitiveTestConnection {
  pageInfo: PageInfo!
  edges: [CognitiveTestEdge]!
  aggregate: AggregateCognitiveTest!
}

input CognitiveTestCreateInput {
  questions: CognitiveTestQuestionCreateManyInput
  responses: UserResponseCreateManyInput
  User: UserCreateOneInput!
}

type CognitiveTestEdge {
  node: CognitiveTest!
  cursor: String!
}

enum CognitiveTestOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CognitiveTestPreviousValues {
  id: ID!
}

type CognitiveTestQuestion {
  id: ID!
  question: String!
  active: Boolean!
  type: QuestionType
  responses(where: ResponseWhereInput, orderBy: ResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Response!]
}

type CognitiveTestQuestionConnection {
  pageInfo: PageInfo!
  edges: [CognitiveTestQuestionEdge]!
  aggregate: AggregateCognitiveTestQuestion!
}

input CognitiveTestQuestionCreateInput {
  question: String!
  active: Boolean!
  type: QuestionTypeCreateOneWithoutQuestionsInput
  responses: ResponseCreateManyWithoutQuestionInput
}

input CognitiveTestQuestionCreateManyInput {
  create: [CognitiveTestQuestionCreateInput!]
  connect: [CognitiveTestQuestionWhereUniqueInput!]
}

input CognitiveTestQuestionCreateManyWithoutTypeInput {
  create: [CognitiveTestQuestionCreateWithoutTypeInput!]
  connect: [CognitiveTestQuestionWhereUniqueInput!]
}

input CognitiveTestQuestionCreateOneInput {
  create: CognitiveTestQuestionCreateInput
  connect: CognitiveTestQuestionWhereUniqueInput
}

input CognitiveTestQuestionCreateOneWithoutResponsesInput {
  create: CognitiveTestQuestionCreateWithoutResponsesInput
  connect: CognitiveTestQuestionWhereUniqueInput
}

input CognitiveTestQuestionCreateWithoutResponsesInput {
  question: String!
  active: Boolean!
  type: QuestionTypeCreateOneWithoutQuestionsInput
}

input CognitiveTestQuestionCreateWithoutTypeInput {
  question: String!
  active: Boolean!
  responses: ResponseCreateManyWithoutQuestionInput
}

type CognitiveTestQuestionEdge {
  node: CognitiveTestQuestion!
  cursor: String!
}

enum CognitiveTestQuestionOrderByInput {
  id_ASC
  id_DESC
  question_ASC
  question_DESC
  active_ASC
  active_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CognitiveTestQuestionPreviousValues {
  id: ID!
  question: String!
  active: Boolean!
}

type CognitiveTestQuestionSubscriptionPayload {
  mutation: MutationType!
  node: CognitiveTestQuestion
  updatedFields: [String!]
  previousValues: CognitiveTestQuestionPreviousValues
}

input CognitiveTestQuestionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CognitiveTestQuestionWhereInput
  AND: [CognitiveTestQuestionSubscriptionWhereInput!]
  OR: [CognitiveTestQuestionSubscriptionWhereInput!]
  NOT: [CognitiveTestQuestionSubscriptionWhereInput!]
}

input CognitiveTestQuestionUpdateDataInput {
  question: String
  active: Boolean
  type: QuestionTypeUpdateOneWithoutQuestionsInput
  responses: ResponseUpdateManyWithoutQuestionInput
}

input CognitiveTestQuestionUpdateInput {
  question: String
  active: Boolean
  type: QuestionTypeUpdateOneWithoutQuestionsInput
  responses: ResponseUpdateManyWithoutQuestionInput
}

input CognitiveTestQuestionUpdateManyInput {
  create: [CognitiveTestQuestionCreateInput!]
  update: [CognitiveTestQuestionUpdateWithWhereUniqueNestedInput!]
  upsert: [CognitiveTestQuestionUpsertWithWhereUniqueNestedInput!]
  delete: [CognitiveTestQuestionWhereUniqueInput!]
  connect: [CognitiveTestQuestionWhereUniqueInput!]
  disconnect: [CognitiveTestQuestionWhereUniqueInput!]
}

input CognitiveTestQuestionUpdateManyMutationInput {
  question: String
  active: Boolean
}

input CognitiveTestQuestionUpdateManyWithoutTypeInput {
  create: [CognitiveTestQuestionCreateWithoutTypeInput!]
  delete: [CognitiveTestQuestionWhereUniqueInput!]
  connect: [CognitiveTestQuestionWhereUniqueInput!]
  disconnect: [CognitiveTestQuestionWhereUniqueInput!]
  update: [CognitiveTestQuestionUpdateWithWhereUniqueWithoutTypeInput!]
  upsert: [CognitiveTestQuestionUpsertWithWhereUniqueWithoutTypeInput!]
}

input CognitiveTestQuestionUpdateOneRequiredInput {
  create: CognitiveTestQuestionCreateInput
  update: CognitiveTestQuestionUpdateDataInput
  upsert: CognitiveTestQuestionUpsertNestedInput
  connect: CognitiveTestQuestionWhereUniqueInput
}

input CognitiveTestQuestionUpdateOneRequiredWithoutResponsesInput {
  create: CognitiveTestQuestionCreateWithoutResponsesInput
  update: CognitiveTestQuestionUpdateWithoutResponsesDataInput
  upsert: CognitiveTestQuestionUpsertWithoutResponsesInput
  connect: CognitiveTestQuestionWhereUniqueInput
}

input CognitiveTestQuestionUpdateWithoutResponsesDataInput {
  question: String
  active: Boolean
  type: QuestionTypeUpdateOneWithoutQuestionsInput
}

input CognitiveTestQuestionUpdateWithoutTypeDataInput {
  question: String
  active: Boolean
  responses: ResponseUpdateManyWithoutQuestionInput
}

input CognitiveTestQuestionUpdateWithWhereUniqueNestedInput {
  where: CognitiveTestQuestionWhereUniqueInput!
  data: CognitiveTestQuestionUpdateDataInput!
}

input CognitiveTestQuestionUpdateWithWhereUniqueWithoutTypeInput {
  where: CognitiveTestQuestionWhereUniqueInput!
  data: CognitiveTestQuestionUpdateWithoutTypeDataInput!
}

input CognitiveTestQuestionUpsertNestedInput {
  update: CognitiveTestQuestionUpdateDataInput!
  create: CognitiveTestQuestionCreateInput!
}

input CognitiveTestQuestionUpsertWithoutResponsesInput {
  update: CognitiveTestQuestionUpdateWithoutResponsesDataInput!
  create: CognitiveTestQuestionCreateWithoutResponsesInput!
}

input CognitiveTestQuestionUpsertWithWhereUniqueNestedInput {
  where: CognitiveTestQuestionWhereUniqueInput!
  update: CognitiveTestQuestionUpdateDataInput!
  create: CognitiveTestQuestionCreateInput!
}

input CognitiveTestQuestionUpsertWithWhereUniqueWithoutTypeInput {
  where: CognitiveTestQuestionWhereUniqueInput!
  update: CognitiveTestQuestionUpdateWithoutTypeDataInput!
  create: CognitiveTestQuestionCreateWithoutTypeInput!
}

input CognitiveTestQuestionWhereInput {
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
  question: String
  question_not: String
  question_in: [String!]
  question_not_in: [String!]
  question_lt: String
  question_lte: String
  question_gt: String
  question_gte: String
  question_contains: String
  question_not_contains: String
  question_starts_with: String
  question_not_starts_with: String
  question_ends_with: String
  question_not_ends_with: String
  active: Boolean
  active_not: Boolean
  type: QuestionTypeWhereInput
  responses_every: ResponseWhereInput
  responses_some: ResponseWhereInput
  responses_none: ResponseWhereInput
  AND: [CognitiveTestQuestionWhereInput!]
  OR: [CognitiveTestQuestionWhereInput!]
  NOT: [CognitiveTestQuestionWhereInput!]
}

input CognitiveTestQuestionWhereUniqueInput {
  id: ID
}

type CognitiveTestSubscriptionPayload {
  mutation: MutationType!
  node: CognitiveTest
  updatedFields: [String!]
  previousValues: CognitiveTestPreviousValues
}

input CognitiveTestSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CognitiveTestWhereInput
  AND: [CognitiveTestSubscriptionWhereInput!]
  OR: [CognitiveTestSubscriptionWhereInput!]
  NOT: [CognitiveTestSubscriptionWhereInput!]
}

input CognitiveTestUpdateInput {
  questions: CognitiveTestQuestionUpdateManyInput
  responses: UserResponseUpdateManyInput
  User: UserUpdateOneRequiredInput
}

input CognitiveTestWhereInput {
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
  questions_every: CognitiveTestQuestionWhereInput
  questions_some: CognitiveTestQuestionWhereInput
  questions_none: CognitiveTestQuestionWhereInput
  responses_every: UserResponseWhereInput
  responses_some: UserResponseWhereInput
  responses_none: UserResponseWhereInput
  User: UserWhereInput
  AND: [CognitiveTestWhereInput!]
  OR: [CognitiveTestWhereInput!]
  NOT: [CognitiveTestWhereInput!]
}

input CognitiveTestWhereUniqueInput {
  id: ID
}

type Comment {
  id: ID!
  text: String
  forum: Forum!
  user: User!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  text: String
  forum: ForumCreateOneWithoutCommentsInput!
  user: UserCreateOneInput!
}

input CommentCreateManyWithoutForumInput {
  create: [CommentCreateWithoutForumInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutForumInput {
  text: String
  user: UserCreateOneInput!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommentPreviousValues {
  id: ID!
  text: String
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  text: String
  forum: ForumUpdateOneRequiredWithoutCommentsInput
  user: UserUpdateOneRequiredInput
}

input CommentUpdateManyMutationInput {
  text: String
}

input CommentUpdateManyWithoutForumInput {
  create: [CommentCreateWithoutForumInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutForumInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutForumInput!]
}

input CommentUpdateWithoutForumDataInput {
  text: String
  user: UserUpdateOneRequiredInput
}

input CommentUpdateWithWhereUniqueWithoutForumInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutForumDataInput!
}

input CommentUpsertWithWhereUniqueWithoutForumInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutForumDataInput!
  create: CommentCreateWithoutForumInput!
}

input CommentWhereInput {
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
  forum: ForumWhereInput
  user: UserWhereInput
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

type Forum {
  id: ID!
  text: String
  title: String
  user: User!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

type ForumConnection {
  pageInfo: PageInfo!
  edges: [ForumEdge]!
  aggregate: AggregateForum!
}

input ForumCreateInput {
  text: String
  title: String
  user: UserCreateOneInput!
  comments: CommentCreateManyWithoutForumInput
}

input ForumCreateOneWithoutCommentsInput {
  create: ForumCreateWithoutCommentsInput
  connect: ForumWhereUniqueInput
}

input ForumCreateWithoutCommentsInput {
  text: String
  title: String
  user: UserCreateOneInput!
}

type ForumEdge {
  node: Forum!
  cursor: String!
}

enum ForumOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ForumPreviousValues {
  id: ID!
  text: String
  title: String
}

type ForumSubscriptionPayload {
  mutation: MutationType!
  node: Forum
  updatedFields: [String!]
  previousValues: ForumPreviousValues
}

input ForumSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ForumWhereInput
  AND: [ForumSubscriptionWhereInput!]
  OR: [ForumSubscriptionWhereInput!]
  NOT: [ForumSubscriptionWhereInput!]
}

input ForumUpdateInput {
  text: String
  title: String
  user: UserUpdateOneRequiredInput
  comments: CommentUpdateManyWithoutForumInput
}

input ForumUpdateManyMutationInput {
  text: String
  title: String
}

input ForumUpdateOneRequiredWithoutCommentsInput {
  create: ForumCreateWithoutCommentsInput
  update: ForumUpdateWithoutCommentsDataInput
  upsert: ForumUpsertWithoutCommentsInput
  connect: ForumWhereUniqueInput
}

input ForumUpdateWithoutCommentsDataInput {
  text: String
  title: String
  user: UserUpdateOneRequiredInput
}

input ForumUpsertWithoutCommentsInput {
  update: ForumUpdateWithoutCommentsDataInput!
  create: ForumCreateWithoutCommentsInput!
}

input ForumWhereInput {
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
  user: UserWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  AND: [ForumWhereInput!]
  OR: [ForumWhereInput!]
  NOT: [ForumWhereInput!]
}

input ForumWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCognitiveTest(data: CognitiveTestCreateInput!): CognitiveTest!
  updateCognitiveTest(data: CognitiveTestUpdateInput!, where: CognitiveTestWhereUniqueInput!): CognitiveTest
  upsertCognitiveTest(where: CognitiveTestWhereUniqueInput!, create: CognitiveTestCreateInput!, update: CognitiveTestUpdateInput!): CognitiveTest!
  deleteCognitiveTest(where: CognitiveTestWhereUniqueInput!): CognitiveTest
  deleteManyCognitiveTests(where: CognitiveTestWhereInput): BatchPayload!
  createCognitiveTestQuestion(data: CognitiveTestQuestionCreateInput!): CognitiveTestQuestion!
  updateCognitiveTestQuestion(data: CognitiveTestQuestionUpdateInput!, where: CognitiveTestQuestionWhereUniqueInput!): CognitiveTestQuestion
  updateManyCognitiveTestQuestions(data: CognitiveTestQuestionUpdateManyMutationInput!, where: CognitiveTestQuestionWhereInput): BatchPayload!
  upsertCognitiveTestQuestion(where: CognitiveTestQuestionWhereUniqueInput!, create: CognitiveTestQuestionCreateInput!, update: CognitiveTestQuestionUpdateInput!): CognitiveTestQuestion!
  deleteCognitiveTestQuestion(where: CognitiveTestQuestionWhereUniqueInput!): CognitiveTestQuestion
  deleteManyCognitiveTestQuestions(where: CognitiveTestQuestionWhereInput): BatchPayload!
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createForum(data: ForumCreateInput!): Forum!
  updateForum(data: ForumUpdateInput!, where: ForumWhereUniqueInput!): Forum
  updateManyForums(data: ForumUpdateManyMutationInput!, where: ForumWhereInput): BatchPayload!
  upsertForum(where: ForumWhereUniqueInput!, create: ForumCreateInput!, update: ForumUpdateInput!): Forum!
  deleteForum(where: ForumWhereUniqueInput!): Forum
  deleteManyForums(where: ForumWhereInput): BatchPayload!
  createQuestionType(data: QuestionTypeCreateInput!): QuestionType!
  updateQuestionType(data: QuestionTypeUpdateInput!, where: QuestionTypeWhereUniqueInput!): QuestionType
  updateManyQuestionTypes(data: QuestionTypeUpdateManyMutationInput!, where: QuestionTypeWhereInput): BatchPayload!
  upsertQuestionType(where: QuestionTypeWhereUniqueInput!, create: QuestionTypeCreateInput!, update: QuestionTypeUpdateInput!): QuestionType!
  deleteQuestionType(where: QuestionTypeWhereUniqueInput!): QuestionType
  deleteManyQuestionTypes(where: QuestionTypeWhereInput): BatchPayload!
  createResponse(data: ResponseCreateInput!): Response!
  updateResponse(data: ResponseUpdateInput!, where: ResponseWhereUniqueInput!): Response
  updateManyResponses(data: ResponseUpdateManyMutationInput!, where: ResponseWhereInput): BatchPayload!
  upsertResponse(where: ResponseWhereUniqueInput!, create: ResponseCreateInput!, update: ResponseUpdateInput!): Response!
  deleteResponse(where: ResponseWhereUniqueInput!): Response
  deleteManyResponses(where: ResponseWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserDiagnosis(data: UserDiagnosisCreateInput!): UserDiagnosis!
  updateUserDiagnosis(data: UserDiagnosisUpdateInput!, where: UserDiagnosisWhereUniqueInput!): UserDiagnosis
  updateManyUserDiagnoses(data: UserDiagnosisUpdateManyMutationInput!, where: UserDiagnosisWhereInput): BatchPayload!
  upsertUserDiagnosis(where: UserDiagnosisWhereUniqueInput!, create: UserDiagnosisCreateInput!, update: UserDiagnosisUpdateInput!): UserDiagnosis!
  deleteUserDiagnosis(where: UserDiagnosisWhereUniqueInput!): UserDiagnosis
  deleteManyUserDiagnoses(where: UserDiagnosisWhereInput): BatchPayload!
  createUserResponse(data: UserResponseCreateInput!): UserResponse!
  updateUserResponse(data: UserResponseUpdateInput!, where: UserResponseWhereUniqueInput!): UserResponse
  upsertUserResponse(where: UserResponseWhereUniqueInput!, create: UserResponseCreateInput!, update: UserResponseUpdateInput!): UserResponse!
  deleteUserResponse(where: UserResponseWhereUniqueInput!): UserResponse
  deleteManyUserResponses(where: UserResponseWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  cognitiveTest(where: CognitiveTestWhereUniqueInput!): CognitiveTest
  cognitiveTests(where: CognitiveTestWhereInput, orderBy: CognitiveTestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CognitiveTest]!
  cognitiveTestsConnection(where: CognitiveTestWhereInput, orderBy: CognitiveTestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CognitiveTestConnection!
  cognitiveTestQuestion(where: CognitiveTestQuestionWhereUniqueInput!): CognitiveTestQuestion
  cognitiveTestQuestions(where: CognitiveTestQuestionWhereInput, orderBy: CognitiveTestQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CognitiveTestQuestion]!
  cognitiveTestQuestionsConnection(where: CognitiveTestQuestionWhereInput, orderBy: CognitiveTestQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CognitiveTestQuestionConnection!
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  forum(where: ForumWhereUniqueInput!): Forum
  forums(where: ForumWhereInput, orderBy: ForumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Forum]!
  forumsConnection(where: ForumWhereInput, orderBy: ForumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ForumConnection!
  questionType(where: QuestionTypeWhereUniqueInput!): QuestionType
  questionTypes(where: QuestionTypeWhereInput, orderBy: QuestionTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [QuestionType]!
  questionTypesConnection(where: QuestionTypeWhereInput, orderBy: QuestionTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionTypeConnection!
  response(where: ResponseWhereUniqueInput!): Response
  responses(where: ResponseWhereInput, orderBy: ResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Response]!
  responsesConnection(where: ResponseWhereInput, orderBy: ResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ResponseConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userDiagnosis(where: UserDiagnosisWhereUniqueInput!): UserDiagnosis
  userDiagnoses(where: UserDiagnosisWhereInput, orderBy: UserDiagnosisOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserDiagnosis]!
  userDiagnosesConnection(where: UserDiagnosisWhereInput, orderBy: UserDiagnosisOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserDiagnosisConnection!
  userResponse(where: UserResponseWhereUniqueInput!): UserResponse
  userResponses(where: UserResponseWhereInput, orderBy: UserResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserResponse]!
  userResponsesConnection(where: UserResponseWhereInput, orderBy: UserResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserResponseConnection!
  node(id: ID!): Node
}

type QuestionType {
  id: ID!
  type: String!
  questions(where: CognitiveTestQuestionWhereInput, orderBy: CognitiveTestQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CognitiveTestQuestion!]
}

type QuestionTypeConnection {
  pageInfo: PageInfo!
  edges: [QuestionTypeEdge]!
  aggregate: AggregateQuestionType!
}

input QuestionTypeCreateInput {
  type: String!
  questions: CognitiveTestQuestionCreateManyWithoutTypeInput
}

input QuestionTypeCreateOneWithoutQuestionsInput {
  create: QuestionTypeCreateWithoutQuestionsInput
  connect: QuestionTypeWhereUniqueInput
}

input QuestionTypeCreateWithoutQuestionsInput {
  type: String!
}

type QuestionTypeEdge {
  node: QuestionType!
  cursor: String!
}

enum QuestionTypeOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type QuestionTypePreviousValues {
  id: ID!
  type: String!
}

type QuestionTypeSubscriptionPayload {
  mutation: MutationType!
  node: QuestionType
  updatedFields: [String!]
  previousValues: QuestionTypePreviousValues
}

input QuestionTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: QuestionTypeWhereInput
  AND: [QuestionTypeSubscriptionWhereInput!]
  OR: [QuestionTypeSubscriptionWhereInput!]
  NOT: [QuestionTypeSubscriptionWhereInput!]
}

input QuestionTypeUpdateInput {
  type: String
  questions: CognitiveTestQuestionUpdateManyWithoutTypeInput
}

input QuestionTypeUpdateManyMutationInput {
  type: String
}

input QuestionTypeUpdateOneWithoutQuestionsInput {
  create: QuestionTypeCreateWithoutQuestionsInput
  update: QuestionTypeUpdateWithoutQuestionsDataInput
  upsert: QuestionTypeUpsertWithoutQuestionsInput
  delete: Boolean
  disconnect: Boolean
  connect: QuestionTypeWhereUniqueInput
}

input QuestionTypeUpdateWithoutQuestionsDataInput {
  type: String
}

input QuestionTypeUpsertWithoutQuestionsInput {
  update: QuestionTypeUpdateWithoutQuestionsDataInput!
  create: QuestionTypeCreateWithoutQuestionsInput!
}

input QuestionTypeWhereInput {
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
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  questions_every: CognitiveTestQuestionWhereInput
  questions_some: CognitiveTestQuestionWhereInput
  questions_none: CognitiveTestQuestionWhereInput
  AND: [QuestionTypeWhereInput!]
  OR: [QuestionTypeWhereInput!]
  NOT: [QuestionTypeWhereInput!]
}

input QuestionTypeWhereUniqueInput {
  id: ID
}

type Response {
  id: ID!
  question: CognitiveTestQuestion!
  correct: Boolean!
  text: String!
}

type ResponseConnection {
  pageInfo: PageInfo!
  edges: [ResponseEdge]!
  aggregate: AggregateResponse!
}

input ResponseCreateInput {
  question: CognitiveTestQuestionCreateOneWithoutResponsesInput!
  correct: Boolean!
  text: String!
}

input ResponseCreateManyWithoutQuestionInput {
  create: [ResponseCreateWithoutQuestionInput!]
  connect: [ResponseWhereUniqueInput!]
}

input ResponseCreateOneInput {
  create: ResponseCreateInput
  connect: ResponseWhereUniqueInput
}

input ResponseCreateWithoutQuestionInput {
  correct: Boolean!
  text: String!
}

type ResponseEdge {
  node: Response!
  cursor: String!
}

enum ResponseOrderByInput {
  id_ASC
  id_DESC
  correct_ASC
  correct_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ResponsePreviousValues {
  id: ID!
  correct: Boolean!
  text: String!
}

type ResponseSubscriptionPayload {
  mutation: MutationType!
  node: Response
  updatedFields: [String!]
  previousValues: ResponsePreviousValues
}

input ResponseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ResponseWhereInput
  AND: [ResponseSubscriptionWhereInput!]
  OR: [ResponseSubscriptionWhereInput!]
  NOT: [ResponseSubscriptionWhereInput!]
}

input ResponseUpdateDataInput {
  question: CognitiveTestQuestionUpdateOneRequiredWithoutResponsesInput
  correct: Boolean
  text: String
}

input ResponseUpdateInput {
  question: CognitiveTestQuestionUpdateOneRequiredWithoutResponsesInput
  correct: Boolean
  text: String
}

input ResponseUpdateManyMutationInput {
  correct: Boolean
  text: String
}

input ResponseUpdateManyWithoutQuestionInput {
  create: [ResponseCreateWithoutQuestionInput!]
  delete: [ResponseWhereUniqueInput!]
  connect: [ResponseWhereUniqueInput!]
  disconnect: [ResponseWhereUniqueInput!]
  update: [ResponseUpdateWithWhereUniqueWithoutQuestionInput!]
  upsert: [ResponseUpsertWithWhereUniqueWithoutQuestionInput!]
}

input ResponseUpdateOneRequiredInput {
  create: ResponseCreateInput
  update: ResponseUpdateDataInput
  upsert: ResponseUpsertNestedInput
  connect: ResponseWhereUniqueInput
}

input ResponseUpdateWithoutQuestionDataInput {
  correct: Boolean
  text: String
}

input ResponseUpdateWithWhereUniqueWithoutQuestionInput {
  where: ResponseWhereUniqueInput!
  data: ResponseUpdateWithoutQuestionDataInput!
}

input ResponseUpsertNestedInput {
  update: ResponseUpdateDataInput!
  create: ResponseCreateInput!
}

input ResponseUpsertWithWhereUniqueWithoutQuestionInput {
  where: ResponseWhereUniqueInput!
  update: ResponseUpdateWithoutQuestionDataInput!
  create: ResponseCreateWithoutQuestionInput!
}

input ResponseWhereInput {
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
  question: CognitiveTestQuestionWhereInput
  correct: Boolean
  correct_not: Boolean
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
  AND: [ResponseWhereInput!]
  OR: [ResponseWhereInput!]
  NOT: [ResponseWhereInput!]
}

input ResponseWhereUniqueInput {
  id: ID
}

type Subscription {
  cognitiveTest(where: CognitiveTestSubscriptionWhereInput): CognitiveTestSubscriptionPayload
  cognitiveTestQuestion(where: CognitiveTestQuestionSubscriptionWhereInput): CognitiveTestQuestionSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  forum(where: ForumSubscriptionWhereInput): ForumSubscriptionPayload
  questionType(where: QuestionTypeSubscriptionWhereInput): QuestionTypeSubscriptionPayload
  response(where: ResponseSubscriptionWhereInput): ResponseSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userDiagnosis(where: UserDiagnosisSubscriptionWhereInput): UserDiagnosisSubscriptionPayload
  userResponse(where: UserResponseSubscriptionWhereInput): UserResponseSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  email: String!
  aidName: String!
  phone: String!
  address: String!
  birthDate: String!
  password: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  email: String!
  aidName: String!
  phone: String!
  address: String!
  birthDate: String!
  password: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserDiagnosis {
  id: ID!
  User: User!
  CognitiveResult: Float!
  MusicalResult: Float!
  GamesResult: Float!
}

type UserDiagnosisConnection {
  pageInfo: PageInfo!
  edges: [UserDiagnosisEdge]!
  aggregate: AggregateUserDiagnosis!
}

input UserDiagnosisCreateInput {
  User: UserCreateOneInput!
  CognitiveResult: Float!
  MusicalResult: Float!
  GamesResult: Float!
}

type UserDiagnosisEdge {
  node: UserDiagnosis!
  cursor: String!
}

enum UserDiagnosisOrderByInput {
  id_ASC
  id_DESC
  CognitiveResult_ASC
  CognitiveResult_DESC
  MusicalResult_ASC
  MusicalResult_DESC
  GamesResult_ASC
  GamesResult_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserDiagnosisPreviousValues {
  id: ID!
  CognitiveResult: Float!
  MusicalResult: Float!
  GamesResult: Float!
}

type UserDiagnosisSubscriptionPayload {
  mutation: MutationType!
  node: UserDiagnosis
  updatedFields: [String!]
  previousValues: UserDiagnosisPreviousValues
}

input UserDiagnosisSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserDiagnosisWhereInput
  AND: [UserDiagnosisSubscriptionWhereInput!]
  OR: [UserDiagnosisSubscriptionWhereInput!]
  NOT: [UserDiagnosisSubscriptionWhereInput!]
}

input UserDiagnosisUpdateInput {
  User: UserUpdateOneRequiredInput
  CognitiveResult: Float
  MusicalResult: Float
  GamesResult: Float
}

input UserDiagnosisUpdateManyMutationInput {
  CognitiveResult: Float
  MusicalResult: Float
  GamesResult: Float
}

input UserDiagnosisWhereInput {
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
  User: UserWhereInput
  CognitiveResult: Float
  CognitiveResult_not: Float
  CognitiveResult_in: [Float!]
  CognitiveResult_not_in: [Float!]
  CognitiveResult_lt: Float
  CognitiveResult_lte: Float
  CognitiveResult_gt: Float
  CognitiveResult_gte: Float
  MusicalResult: Float
  MusicalResult_not: Float
  MusicalResult_in: [Float!]
  MusicalResult_not_in: [Float!]
  MusicalResult_lt: Float
  MusicalResult_lte: Float
  MusicalResult_gt: Float
  MusicalResult_gte: Float
  GamesResult: Float
  GamesResult_not: Float
  GamesResult_in: [Float!]
  GamesResult_not_in: [Float!]
  GamesResult_lt: Float
  GamesResult_lte: Float
  GamesResult_gt: Float
  GamesResult_gte: Float
  AND: [UserDiagnosisWhereInput!]
  OR: [UserDiagnosisWhereInput!]
  NOT: [UserDiagnosisWhereInput!]
}

input UserDiagnosisWhereUniqueInput {
  id: ID
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
  aidName_ASC
  aidName_DESC
  phone_ASC
  phone_DESC
  address_ASC
  address_DESC
  birthDate_ASC
  birthDate_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  aidName: String!
  phone: String!
  address: String!
  birthDate: String!
  password: String!
}

type UserResponse {
  id: ID!
  question: CognitiveTestQuestion!
  response: Response!
  User: User!
}

type UserResponseConnection {
  pageInfo: PageInfo!
  edges: [UserResponseEdge]!
  aggregate: AggregateUserResponse!
}

input UserResponseCreateInput {
  question: CognitiveTestQuestionCreateOneInput!
  response: ResponseCreateOneInput!
  User: UserCreateOneInput!
}

input UserResponseCreateManyInput {
  create: [UserResponseCreateInput!]
  connect: [UserResponseWhereUniqueInput!]
}

type UserResponseEdge {
  node: UserResponse!
  cursor: String!
}

enum UserResponseOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserResponsePreviousValues {
  id: ID!
}

type UserResponseSubscriptionPayload {
  mutation: MutationType!
  node: UserResponse
  updatedFields: [String!]
  previousValues: UserResponsePreviousValues
}

input UserResponseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserResponseWhereInput
  AND: [UserResponseSubscriptionWhereInput!]
  OR: [UserResponseSubscriptionWhereInput!]
  NOT: [UserResponseSubscriptionWhereInput!]
}

input UserResponseUpdateDataInput {
  question: CognitiveTestQuestionUpdateOneRequiredInput
  response: ResponseUpdateOneRequiredInput
  User: UserUpdateOneRequiredInput
}

input UserResponseUpdateInput {
  question: CognitiveTestQuestionUpdateOneRequiredInput
  response: ResponseUpdateOneRequiredInput
  User: UserUpdateOneRequiredInput
}

input UserResponseUpdateManyInput {
  create: [UserResponseCreateInput!]
  update: [UserResponseUpdateWithWhereUniqueNestedInput!]
  upsert: [UserResponseUpsertWithWhereUniqueNestedInput!]
  delete: [UserResponseWhereUniqueInput!]
  connect: [UserResponseWhereUniqueInput!]
  disconnect: [UserResponseWhereUniqueInput!]
}

input UserResponseUpdateWithWhereUniqueNestedInput {
  where: UserResponseWhereUniqueInput!
  data: UserResponseUpdateDataInput!
}

input UserResponseUpsertWithWhereUniqueNestedInput {
  where: UserResponseWhereUniqueInput!
  update: UserResponseUpdateDataInput!
  create: UserResponseCreateInput!
}

input UserResponseWhereInput {
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
  question: CognitiveTestQuestionWhereInput
  response: ResponseWhereInput
  User: UserWhereInput
  AND: [UserResponseWhereInput!]
  OR: [UserResponseWhereInput!]
  NOT: [UserResponseWhereInput!]
}

input UserResponseWhereUniqueInput {
  id: ID
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
  aidName: String
  phone: String
  address: String
  birthDate: String
  password: String
}

input UserUpdateInput {
  username: String
  email: String
  aidName: String
  phone: String
  address: String
  birthDate: String
  password: String
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  aidName: String
  phone: String
  address: String
  birthDate: String
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
  aidName: String
  aidName_not: String
  aidName_in: [String!]
  aidName_not_in: [String!]
  aidName_lt: String
  aidName_lte: String
  aidName_gt: String
  aidName_gte: String
  aidName_contains: String
  aidName_not_contains: String
  aidName_starts_with: String
  aidName_not_starts_with: String
  aidName_ends_with: String
  aidName_not_ends_with: String
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
  birthDate: String
  birthDate_not: String
  birthDate_in: [String!]
  birthDate_not_in: [String!]
  birthDate_lt: String
  birthDate_lte: String
  birthDate_gt: String
  birthDate_gte: String
  birthDate_contains: String
  birthDate_not_contains: String
  birthDate_starts_with: String
  birthDate_not_starts_with: String
  birthDate_ends_with: String
  birthDate_not_ends_with: String
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
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`