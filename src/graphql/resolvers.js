const { Object } = require("../database/models");

const resolvers = {
    Query: {
        async getObjects() {
            return Object.findAll();
        },
    },
    Mutation: {
        async createObject(_, { object }) {
            return Object.create(object);
        },
    },
};

module.exports = resolvers;