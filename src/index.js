var gqlType = require('graphql/type');

var gra = {
  int: gqlType.GraphQLInt,
  id: gqlType.GraphQLID,
  float: gqlType.GraphQLFloat,
  str: gqlType.GraphQLString,
  bool: gqlType.GraphQLBoolean,
  scalar: gqlType.GraphQLScalarType,
  obj: gqlType.GraphQLObjectType,
  interface: gqlType.GraphQLInterfaceType,
  union: gqlType.GraphQLUnionType,
  enum: gqlType.GraphQLEnumType,
  input: gqlType.GraphQLInputObjectType,
  list: gqlType.GraphQLList,
  nonNull: gqlType.GraphQLNonNull,
}

module.exports = gra;
