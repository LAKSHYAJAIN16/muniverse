import { Client } from "faunadb"
import { config } from "dotenv"

function get_client() {
    config();
    const client = new Client({
        secret: process.env.FAUNA_SECRET,
        domain: "db.us.fauna.com"
    });
    return client;
}

export const client = get_client();