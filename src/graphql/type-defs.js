const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        getObjects: [ Object! ]!
    }
    
    type Mutation {
        createObject(object: ObjectInput!): Object!
    }
    
    type Object {
        id: ID!
        name: String!
        description: String
    }
    
    input ObjectInput {
        name: String!
        description: String
    }
`;

module.exports = typeDefs;