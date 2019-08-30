const pool = require("../../../database");

const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = graphql;

const CategorieType = new GraphQLObjectType({
  name: "Categorie",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    categorie: {
      type: CategorieType,
      args: { id: { type: GraphQLID } },
      async resolve(parentValue, args) {
        return pool
          .query(
            `SELECT * FROM "categories" WHERE id=${args.id} ORDER BY id ASC`
          )
          .then(res => {
            return res.rows[0];
          })
          .catch(error => console.log(error.stack));
      }
    },
    categories: {
      type: new GraphQLList(CategorieType),
      args: {},
      async resolve(parentValue, args) {
        return pool
          .query(
            `SELECT * FROM "categories" ORDER BY id ASC`
          )
          .then(res => {
            return res.rows;
          })
          .catch(error => console.log(error.stack));
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
