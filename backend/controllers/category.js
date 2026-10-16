
const services = require('../services/category');

/**
 * Récupère la liste des catégories.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.getAll = async (req,res) => {
    try {
        // on récupère la liste des catégories et on vérifie qu'elle n'est pas vide.
        const categories=await services.getAll();
        if (categories.length==0){
            return res.status(404).json({message:'no category were found'});
        };
        // On renvoie la liste.
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json(error);
    };
};

/**
 * Récupère une catégorie en fonction de son id.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.getById =async(req,res) => {
    const id = req.params.id;

    try {
        // On essaie de récupérer la catégorie et si elle n'existe pas on renvoie une erreur
        const category= await services.getById(id);
        if (!category) {
            return res.status(404).json({message:'category not found'});
        };

        // On renvoie la catégorie
        return res.status(200).json(category);
    } catch (error) {
        return res.status(500).json(error);
    };
};