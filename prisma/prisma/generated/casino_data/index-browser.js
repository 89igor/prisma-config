
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.11.0
 * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
 */
Prisma.prismaVersion = {
  client: "4.11.0",
  engine: "8fde8fef4033376662cad983758335009d522acb"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ActionHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  newValueJson: 'newValueJson',
  ip: 'ip',
  createdAt: 'createdAt',
  userId: 'userId',
  agentId: 'agentId',
  adminId: 'adminId'
});

exports.Prisma.AdminScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  password: 'password',
  name: 'name',
  token: 'token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  accessToken: 'accessToken'
});

exports.Prisma.AgentScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  password: 'password',
  name: 'name',
  active: 'active',
  token: 'token',
  quota: 'quota',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  accessToken: 'accessToken',
  adminId: 'adminId'
});

exports.Prisma.BalanceScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  balance: 'balance',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  ownerId: 'ownerId'
});

exports.Prisma.BetDetailHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  beforeScore: 'beforeScore',
  betScore: 'betScore',
  winScore: 'winScore',
  newScore: 'newScore',
  createAt: 'createAt',
  updateAt: 'updateAt',
  ownerId: 'ownerId',
  gameId: 'gameId'
});

exports.Prisma.GameListScalarFieldEnum = makeEnum({
  id: 'id',
  eGameName: 'eGameName',
  cGameName: 'cGameName',
  type: 'type',
  json: 'json',
  createdAt: 'createdAt'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.NoticeListScalarFieldEnum = makeEnum({
  id: 'id',
  msg: 'msg',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  adminId: 'adminId'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
});

exports.Prisma.PaymentHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  beforeScore: 'beforeScore',
  changeScore: 'changeScore',
  newScore: 'newScore',
  approval: 'approval',
  createdAt: 'createdAt',
  approvalAt: 'approvalAt',
  ownerId: 'ownerId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  username: 'username',
  password: 'password',
  headImage: 'headImage',
  active: 'active',
  token: 'token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  accessToken: 'accessToken',
  agentId: 'agentId'
});


exports.Prisma.ModelName = makeEnum({
  Admin: 'Admin',
  Agent: 'Agent',
  User: 'User',
  ActionHistory: 'ActionHistory',
  Balance: 'Balance',
  GameList: 'GameList',
  PaymentHistory: 'PaymentHistory',
  BetDetailHistory: 'BetDetailHistory',
  NoticeList: 'NoticeList'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
