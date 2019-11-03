const { Sequelize } = require('sequelize');

const { objectOptions, objectAttributes } = require('./models/object');
const { Object } = require("./models");

const DATABASE_URL = process.env.DATABASE_URL || "postgres://localhost/postgres";

class Database {
    constructor () {
        this.sequelize = new Sequelize(DATABASE_URL, {
            logging: false,
        });
    }

    async init () {
        try {
            await this.sequelize.authenticate();
            console.log("🔗 Connected to the Database!");
        } catch (error) {
            console.error("❌ Unable to connect to the Database", error);
            process.exit(1);
        }

        try {
            objectOptions.sequelize = this.sequelize;

            Object.init(objectAttributes, objectOptions);

            // TODO remove sync() when migration framework is added
            await Object.sync();

            console.log("🔮 Initialized data models!");
        } catch (error) {
            console.error("❌ Unable to initialize data models", error);
            process.exit(1);
        }
    }
}


module.exports = Database;