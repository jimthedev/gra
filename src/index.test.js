var chai = require('chai');
var expect = chai.expect;

var g = require('./index.js');
var t = require('graphql/type');

describe('gra', function() {
  describe('micro', function() {
    it('should represent graphql\'s types', function() {
      expect(g.id).to.equal(t.GraphQLID);
      expect(g.i).to.equal(t.GraphQLInt);
      expect(g.f).to.equal(t.GraphQLFloat);
      expect(g.s).to.equal(t.GraphQLString);
      expect(g.b).to.equal(t.GraphQLBoolean);
      expect(g.o).to.equal(t.GraphQLObjectType);
      expect(g.l).to.equal(t.GraphQLList);
      expect(g.u).to.equal(t.GraphQLUnionType);
      expect(g.e).to.equal(t.GraphQLEnumType);
      expect(g.in).to.equal(t.GraphQLInputObjectType);
      expect(g.sc).to.equal(t.GraphQLScalarType);
      expect(g.if).to.equal(t.GraphQLInterfaceType);
      expect(g.nn).to.equal(t.GraphQLNonNull);
    });
  });
  describe('small', function() {
    it('should represent graphql\'s types', function() {
      expect(g.ident).to.equal(t.GraphQLID);
      expect(g.int).to.equal(t.GraphQLInt);
      expect(g.float).to.equal(t.GraphQLFloat);
      expect(g.str).to.equal(t.GraphQLString);
      expect(g.bool).to.equal(t.GraphQLBoolean);
      expect(g.obj).to.equal(t.GraphQLObjectType);
      expect(g.list).to.equal(t.GraphQLList);
      expect(g.union).to.equal(t.GraphQLUnionType);
      expect(g.enum).to.equal(t.GraphQLEnumType);
      expect(g.input).to.equal(t.GraphQLInputObjectType);
      expect(g.scal).to.equal(t.GraphQLScalarType);
      expect(g.inter).to.equal(t.GraphQLInterfaceType);
      expect(g.non).to.equal(t.GraphQLNonNull);
    });
  });
  describe('medium', function() {
    it('should represent graphql\'s types', function() {
      expect(g.identifier).to.equal(t.GraphQLID);
      expect(g.integer).to.equal(t.GraphQLInt);
      expect(g.float).to.equal(t.GraphQLFloat);
      expect(g.string).to.equal(t.GraphQLString);
      expect(g.boolean).to.equal(t.GraphQLBoolean);
      expect(g.object).to.equal(t.GraphQLObjectType);
      expect(g.list).to.equal(t.GraphQLList);
      expect(g.union).to.equal(t.GraphQLUnionType);
      expect(g.enum).to.equal(t.GraphQLEnumType);
      expect(g.inputObject).to.equal(t.GraphQLInputObjectType);
      expect(g.scalar).to.equal(t.GraphQLScalarType);
      expect(g.interface).to.equal(t.GraphQLInterfaceType);
      expect(g.nonNull).to.equal(t.GraphQLNonNull);
    });
  });
});
