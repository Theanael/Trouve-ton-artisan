const Category = require("../models/category");

exports.getAll = async () => {
    categories=await Category.findAll();
    return categories;

}

exports.getById = async (id) => {
    category=await Category.findByPk(id);
    return category;
    
}