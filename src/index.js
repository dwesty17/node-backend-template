const Database = require("./database/connection");
const GraphqlServer = require("./graphql/server");

const main = async () => {
    console.log("😀 project_name_here is starting!");
    const startTime = new Date();

    const database = new Database();
    await database.init();

    const graphqlServer = new GraphqlServer();
    await graphqlServer.start();

    const startUpSeconds = (new Date() - startTime) / 1000;
    console.log(`😀 project_name_here started in ${startUpSeconds} seconds!`);
};

(async () => await main())();
