import catData from "../data/catData.js";

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

export default {
    getAll,
    getById
};