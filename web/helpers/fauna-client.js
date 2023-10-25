import { Client } from "faunadb"
import {config} from "dotenv"

export default function get_client(){
    config();
    const client = new Client({
        secret:"fnAFRH3Mi1AATXdd95NUTyhR6Fml_mAa8zLySBco",
        
    });
}