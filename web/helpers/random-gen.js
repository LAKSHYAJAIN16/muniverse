import { v4 as uuidv4 } from 'uuid';

export function uuidThing() {
    return uuidv4();
}

export function faunaID() {
    const f = Math.random() * 100000000000000000
    return f.toString();
}