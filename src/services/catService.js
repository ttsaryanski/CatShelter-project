import Breeds from "../models/Breeds.js";

import Cats from "../models/Cats.js";

const getAll = (query = {}) => {
    let cats = Cats.find();

    if (query.search) {
        cats.find({ breed: { $regex: query.search, $options: 'i'} });
    };

    return cats;
};

const create = (catData) => Cats.create(catData);


const getById = (catId) => Cats.findById(catId);

const editById = (catId, catData) => Cats.findByIdAndUpdate(catId, catData);

const delById = (catId) => Cats.findByIdAndDelete(catId);

const getBreed = () => {
    const breeds = Breeds.find();

    return breeds;
}

const createBreed = (breed) => Breeds.create(breed);

export default {
    getAll,
    create,
    getById,
    editById,
    delById,
    getBreed,
    createBreed
};