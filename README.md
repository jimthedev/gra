## Description

**gra** is a wrapper around GraphQL's type module. It makes the syntax slightly less repetitive.

## Usage

### Install

```
npm install --save graphql
npm install --save gra
```

### Use it

```
var g = require('gra');

// Micro syntax
g.id // ==> GraphQLID,
g.i // ==> GraphQLInt,
g.f // ==> GraphQLFloat,
g.s // ==> GraphQLString,
g.b // ==> GraphQLBoolean,
g.o // ==> GraphQLObjectType,
g.l // ==> GraphQLList,
g.u // ==> GraphQLUnionType,
g.e // ==> GraphQLEnumType,
g.in // ==> GraphQLInputObjectType,
g.sc // ==> GraphQLScalarType,
g.if // ==> GraphQLInterfaceType,
g.nn // ==> GraphQLNonNull,

// Short syntax
g.ident // ==> GraphQLID,
g.int // ==> GraphQLInt,
g.float // ==> GraphQLFloat,
g.str // ==> GraphQLString,
g.bool // ==> GraphQLBoolean,
g.obj // ==> GraphQLObjectType,
g.list // ==> GraphQLList,
g.union // ==> GraphQLUnionType,
g.enum // ==> GraphQLEnumType,
g.input // ==> GraphQLInputObjectType,
g.scal // ==> GraphQLScalarType,
g.inter // ==> GraphQLInterfaceType,
g.non // ==> GraphQLNonNull,

// Medium syntax
g.identifier // ==> GraphQLID,
g.integer // ==> GraphQLInt,
g.string // ==> GraphQLString,
g.boolean // ==> GraphQLBoolean,
g.object // ==> GraphQLObjectType,
g.list // ==> GraphQLList,
g.union // ==> GraphQLUnionType,
g.enum // ==> GraphQLEnumType,
g.inputObject // ==> GraphQLInputObjectType,
g.scalar // ==> GraphQLScalarType,
g.interface // ==> GraphQLInterfaceType,
g.nonNull // ==> GraphQLNonNull,

```
So, using `g.i` or `g.int` or `g.integer` is the same as using `GraphQLInt`.

You can mix and match micro, sort, and medium syntax. They are all provided in various forms for convenience.

Each of the above can be used in place of its [more verbose cousin](http://graphql.org/docs/api-reference-type-system/).

GraphQL is a peerDependency of this project so you should not be hard coded to a specific GraphQL version.

## Inspiration

https://twitter.com/samerbuna/status/771719039441702912
