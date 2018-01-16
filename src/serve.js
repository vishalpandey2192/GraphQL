import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    }));

console.log("Starting the Server");
app.listen(4000);