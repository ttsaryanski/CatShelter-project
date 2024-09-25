import breedData from "../data/breedData.js";
import catsData from "../data/catData.js";
import uniqid from 'uniqid';

const getAll = async (query = {}) => {
    let cats = await catsData.getAll();

    if (query.search) {
        cats = cats.filter(cat => cat.breed.toLowerCase().startsWith(query.search.toLowerCase()));
    };

    return cats;
};

const create = (catData) => {
    catData.id = uniqid();

    return catsData.create(catData);
};

const getById = async (catId) => {
    const cats = await catsData.getAll();
    const result = cats.find(cat => cat.id == catId);

    return result;
};

const delById = async (catId) => {
    const cats = await catsData.getAll();
    const result = cats.filter(cat => cat.id != catId);
    console.log(result);

    return catsData.del(result);
};

const getBreed = async () => {
    const breeds = await breedData.getAll();

    return breeds;
}

const createBreed = (breed) => {
    breed.id = uniqid();

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