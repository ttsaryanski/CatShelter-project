import catData from "../data/catData.js";

const getAll = async () => {
    const cats = await catData.getAll();

    return cats;
};

const getById = async (catId) => {
    const cats = await catData.getAll();
    const result = cats.find(cat => cat.id == catId);

    return result;
};

export default {
    getAll,
    getById
};