const { Sequelize } = require('sequelize');

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

class Object extends Sequelize.Model {}

module.exports = {
    Object,
    objectAttributes,
    objectOptions,
};