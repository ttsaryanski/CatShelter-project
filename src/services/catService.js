import breedData from "../data/breedData.js";
import catsData from "../data/catData.js";

const getAll = async (query = {}) => {
    let cats = await catsData.getAll();

    if (query.search) {
        cats = cats.filter(cat => cat.breed.toLowerCase().startsWith(query.search.toLowerCase()));
    };

    return cats;
};

const create = (catData) => {
    return catsData.create(catData);
};

const getById = async (catId) => {
    const cat = await catsData.getById(catId);

    return cat;
};

const delById = async (catId) => {
    return catsData.del(catId);
};

const getBreed = async () => {
    const breeds = await breedData.getAll();

    return breeds;
}

const createBreed = (breed) => {
    return breedData.create(breed);
}

export default {
    getAll,
    create,
    getById,
    delById,
    getBreed,
    createBreed
};