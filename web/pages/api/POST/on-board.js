import React from 'react';
import { Create, Collection, Ref } from 'faunadb';
import { client } from "@/helpers/fauna-client";
import { scryptSync, randomBytes } from "crypto";
import { faunaID, uuidThing } from '@/helpers/random-gen';

export default async function handler(req, res) {
    // Assemble Payload
    const id = faunaID();
    const key = uuidThing();

    //Hash key using crypto module
    const salt = randomBytes(16).toString("hex");
    const newKey = scryptSync(key, salt, 64).toString(
        "hex"
    );
    const finalKey = `${salt}:${newKey}`;

    const payload = {
        ...req.body,
        id: id,
        key: finalKey,
    }
    console.log(id);

    try {
        // Try
        const doc = await client.query(Create(Ref(Collection("muns"), id), {
            data: payload,
        }))
        res.status(200).json({
            status: "success",
            doc: doc,
        })
    }
    catch (err) {
        res.json({
            status: "error",
            err: JSON.stringify(err),
        })
        throw err;
    }
}
