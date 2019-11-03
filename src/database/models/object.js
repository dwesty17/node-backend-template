const { Sequelize } = require('sequelize');

class Object extends Sequelize.Model {}

const objectAttributes = {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    }
};

const objectOptions = {
    modelName: 'object'
};

module.exports = {
    Object,
    objectAttributes,
    objectOptions,
};