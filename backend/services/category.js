const Category = require("../models/category");

exports.getAll = async () => {
    categories=await Category.findAll();
    return categories;

};

// Au final ce service n'est pas utilisé mais il pourrait toujours servir ultérieurement.
exports.getById = async (id) => {
    category=await Category.findByPk(id);
    return category;
    
};