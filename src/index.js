import { ApolloServer } from 'apollo-server-express';
import {resolvers} from './resolvers'
import {typeDefs} from './typeDefs'
import express from 'express';
import mongoose from 'mongoose';

const startServer = async () => {
    console.log('hi')
    const app = express();

    const server = new ApolloServer({ typeDefs, resolvers });

    server.applyMiddleware({ app });

    await mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });

    app.listen({ port: 4000 }, () => {
        console.log(`Example app listening at http://localhost:${4000}/graphql`)
    })
}

startServer();

