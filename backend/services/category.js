const Category = require("../models/category");
/**
 * Récupère la liste de toutes les catégories
 * @returns {Array} la liste des catégories
 */
exports.getAll = async () => {
    categories=await Category.findAll();
    return categories;

};


/**
 * Récupère une catégorie à partir de son id.
 * Au final ce service n'est pas utilisé mais il pourrait toujours servir ultérieurement.
 * @param {Number} id l'id de la catégorie recherchée. 
 * @returns {Object} la catégorie recherchée.
 */
exports.getById = async (id) => {
    category=await Category.findByPk(id);
    return category;
    
};