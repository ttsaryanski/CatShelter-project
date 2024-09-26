import Breed from '../models/Breeds.js';

async function getAll() {
    const breeds = await Breed.find().lean();

    return breeds;
};

async function create(breed) {
    return await Breed.create(breed);
};

export default {
    getAll,
    create
};