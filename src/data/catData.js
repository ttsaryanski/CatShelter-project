import Cat from "../models/Cat.js";

async function getAll() {
    const cats = await Cat.find().lean();

    return cats;
};

async function getById(id) {
    const cat = await Cat.findById(id).lean();

    return cat;
}

async function create(catData) {
    return await Cat.create(catData);
};

async function del(catId) {
    return await Cat.findByIdAndDelete(catId);
}

export default {
    getAll,
    getById,
    create,
    del
};