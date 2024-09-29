import Breed from "../models/Breed.js";

import Cat from "../models/Cat.js";

const getAll = (query = {}) => {
    let cats = Cat.find();

    if (query.search) {
        cats.find({ breed: { $regex: query.search, $options: 'i'} });
    };

    return cats;
};

const create = (catData) => Cat.create(catData);


const getById = (catId) => Cat.findById(catId);

const editById = (catId, catData) => Cat.findByIdAndUpdate(catId, catData);

const delById = (catId) => Cat.findByIdAndDelete(catId);

const getBreed = () => {
    const breeds = Breed.find();

    return breeds;
}

const createBreed = (breed) => Breed.create(breed);

export default {
    getAll,
    create,
    getById,
    editById,
    delById,
    getBreed,
    createBreed
};