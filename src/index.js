var gqlType = require('graphql/type');

var gra = {
  i: gqlType.GraphQLInt,
  int: gqlType.GraphQLInt,
  integer: gqlType.GraphQLInt,

  id: gqlType.GraphQLID,
  ident: gqlType.GraphQLID,
  identifier: gqlType.GraphQLID,

  f: gqlType.GraphQLFloat,
  float: gqlType.GraphQLFloat,

  s: gqlType.GraphQLString,
  str: gqlType.GraphQLString,
  string: gqlType.GraphQLString,

  b: gqlType.GraphQLBoolean,
  bool: gqlType.GraphQLBoolean,
  boolean: gqlType.GraphQLBoolean,

  sc: gqlType.GraphQLScalarType,
  scal: gqlType.GraphQLScalarType,
  scalar: gqlType.GraphQLScalarType,

  o: gqlType.GraphQLObjectType,
  obj: gqlType.GraphQLObjectType,
  object: gqlType.GraphQLObjectType,

  if: gqlType.GraphQLInterfaceType,
  inter: gqlType.GraphQLInterfaceType,
  interface: gqlType.GraphQLInterfaceType,

  u: gqlType.GraphQLUnionType,
  union: gqlType.GraphQLUnionType,

  e: gqlType.GraphQLEnumType,
  enum: gqlType.GraphQLEnumType,

  in: gqlType.GraphQLInputObjectType,
  input: gqlType.GraphQLInputObjectType,
  inputObject: gqlType.GraphQLInputObjectType,

  l: gqlType.GraphQLList,
  list: gqlType.GraphQLList,

  nn: gqlType.GraphQLNonNull,
  non: gqlType.GraphQLNonNull,
  nonNull: gqlType.GraphQLNonNull,

  schema: gqlType.GraphQLSchema,
}

module.exports = gra;
