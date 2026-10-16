const services = require('../services/craftsman');


/**
 * Récupère le couple (id,nom) pour tous les artisans.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.getAll = async (req,res) => {
    try {
        // On essaie de récupérer la liste de tous les artisans et on vérfie qu'elle n'est pas vide.
        const craftsmen=await services.getAll();
        if(craftsmen.length==0){
            return res.status(404).json({message:"no craftsmen were found"});
        }
        
        // sinon on renvoie la liste.
        return res.status(200).json(craftsmen);
    } catch (error) {
        return res.status(500).json(error);
    };
};

/**
 * Récupère toutes les données d'un artisan en fonction de son id.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.getById = async (req,res) => {
    const id = req.params.id

    try {
        // On essaie de récupérer l'artisan et si il n'existe pas on renvoie une erreur.
        const craftsman = await services.getById(id);
        if (! craftsman) {
            return res.status(404).json({message:'craftsman not found'});
        }    

        // sinon on renvoie l'artisan.
        return res.status(200).json(craftsman);
    } catch (error) {
        return res.status(500).json(error);
    };
};

/**
 * Récupère les artisans du mois.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.getTop = async (req,res) => {
    try {
        // On récupère les artisans du mois et on vérfie qu'elle n'est pas vide.
        const craftsmen= await services.getTop();
        if(craftsmen.length==0){
            return res.status(404).json({message:"no top craftsmen were found"});
        }
        
        // sinon on renvoie la liste.
        return res.status(200).json(craftsmen);
    } catch (error) {
        return res.status(500).json(error);
    };
};

/**
 * Récupère les artisans d'une catégorie en fonction de son id.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.getByCategory = async (req,res) => {
    const idCategory = req.params.idCategory;

    try {
        //  on récupère la liste des artisans dans la catégorie et on vérfie qu'elle n'est pas vide.
        const craftsmen = await services.getByCategory(idCategory);
        if(craftsmen.length==0){
            return res.status(404).json({message:"no craftsmen found for this category"});
        }

        // sinon on renvoie la liste.
        return res.status(200).json(craftsmen);
    } catch (error) {
        return res.status(500).json(error);
    };
};