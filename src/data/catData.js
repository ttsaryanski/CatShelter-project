import fs from 'fs/promises';
import path from 'path';

const dbPath = path.resolve('./src/db.json');

async function getDb() {
    const db = await fs.readFile(dbPath, { encoding: 'utf-8'});
    const data = JSON.parse(db);

    return data;
};

async function getAll() {
    const db = await getDb();

    return db.cats;
};

export default {
    getAll
};