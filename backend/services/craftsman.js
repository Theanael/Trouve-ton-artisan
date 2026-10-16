const {City, Speciality,Craftsman } = require('../models/associations');

/**
 * Récupère la liste de tous les artisans.
 * @returns {Array} la liste des artisans, sous forme de couple (id,nom).
 */
exports.getAll = async () => {
    const craftsmen = await Craftsman.findAll({
        attributes: ['id', 'name']
    });
    return craftsmen;
};

/**
 * Récupère un artisan à partir de son id.
 * @param {Number} id l'id de l'artisan recherché.
 * @returns {Object} l'artisan recherché.
 */
exports.getById = async (id) => {
    const craftsman = await Craftsman.findByPk(id,{
        include:[City,Speciality]
    });
    return craftsman;
};

/**
 * Récupère les artisans du mois.
 * @returns {Array} la liste des artisans du mois.
 */
exports.getTop = async () => {
    const craftsmen = await Craftsman.findAll({
        attributes:['id','name','note'],
        include:[City,Speciality],
        where:{
          top: true
        }
    });
    return craftsmen;
};

/**
 * Récupère tous les artisans d'une catégorie.
 * @param {Number} categoryId l'id de la catégorie.
 * @returns {Array} la liste des artisans de la catégorie
 */
exports.getByCategory = async (categoryId) => {
    const craftsmen = await Craftsman.findAll({
        attributes:['id','name','note'],
        include:[
            City,
            {
            model:Speciality,
            required:true,
            where:{id_category:categoryId}
            }
        ]
    });
    return craftsmen;
}

