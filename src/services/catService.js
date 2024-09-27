import Breeds from "../models/Breeds.js";

import Cats from "../models/Cats.js";

const getAll = async (query = {}) => {
    //let cats = await catsData.getAll();
    const cats = await Cats.find().lean();

    if (query.search) {
        cats = cats.filter(cat => cat.breed.toLowerCase().startsWith(query.search.toLowerCase()));
    };

    return cats;
};

const create = (catData) => Cats.create(catData);


const getById = async (catId) => {
    const cat = await Cats.findById(catId).lean();

    return cat;
};

const delById = async (catId) => {
    return await Cats.findByIdAndDelete(catId);
};

const getBreed = async () => {
    const breeds = await Breeds.find().lean();

    return breeds;
}

const createBreed = async (breed) => {
    return await Breeds.create(breed);
}

export default {
    getAll,
    create,
    getById,
    delById,
    getBreed,
    createBreed
};