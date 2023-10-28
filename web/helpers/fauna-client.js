import { Client } from "faunadb"
import {config} from "dotenv"

function get_client(){
    config()
    const client = new Client({
        secret:"fnAFRH3Mi1AATXdd95NUTyhR6Fml_mAa8zLySBco",
        domain:"db.us.fauna.com"
    });
    return client;
}

export const client = get_client();