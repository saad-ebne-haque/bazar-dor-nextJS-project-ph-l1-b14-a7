import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_SECRET_URI as string);
const db = client.db('bazar-dor');

export const auth = betterAuth({


    database: mongodbAdapter(db, { client }),

    emailAndPassword: {
        enabled: true
    },

    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }
    }

});