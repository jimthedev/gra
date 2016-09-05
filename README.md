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

g.int
g.id
g.float
g.str
g.bool
g.obj
g.list
g.interface
g.union
g.enum
g.input
g.nonNull
g.scalar
```

`g.int` is the same as using `GraphQLInt`

Each of the above can be used in place of its [more verbose cousin](http://graphql.org/docs/api-reference-type-system/).

GraphQL is a peerDependency of this project so you should not be hard coded to a specific GraphQL version.

## Inspiration

https://twitter.com/samerbuna/status/771719039441702912
