import fs from 'fs/promises';
import path from 'path';
import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost:27017/catShelter');

const dbPath = path.resolve('./src/db.json');

async function getDb() {
    const db = await fs.readFile(dbPath, { encoding: 'utf-8'});
    const data = JSON.parse(db);

    return data;
};

function saveDb(data) {
    return fs.writeFile(dbPath, JSON.stringify(data, {}, 2));
};

async function getAll() {
    const db = await getDb();

    return db.cats;
};

async function create(catData) {
    const db = await getDb();
    db.cats.push(catData);

    return saveDb(db);
};

async function del(catData) {
    const db = await getDb();
    db.cats = catData;

    return saveDb(db);
}

export default {
    getAll,
    create,
    del
};