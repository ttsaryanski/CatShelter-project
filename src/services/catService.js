import breedData from "../data/breedData.js";
import catData from "../data/catData.js";
import uniqid from 'uniqid';

const getAll = async (query = {}) => {
    let cats = await catData.getAll();

    if (query.search) {
        cats = cats.filter(cat => cat.name.toLowerCase().includes(query.search.toLowerCase()));
    };

    return cats;
};

const getById = async (catId) => {
    const cats = await catData.getAll();
    const result = cats.find(cat => cat.id == catId);

    return result;
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
    getById,
    getBreed,
    createBreed
};