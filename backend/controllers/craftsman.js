const services = require('../services/craftsman');

exports.getAll = async (req,res) => {
    try {
        const categories=await services.getAll();
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json(error);
    };
};

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

exports.getTop = async (req,res) => {
    try {
        // On récupère les artisans du mois et on les renvoie.
        const craftsmen= await services.getTop();
        return res.status(200).json(craftsmen);
    } catch (error) {
        return res.status(500).json(error);
    };
};

exports.getByCategory = async (req,res) => {
    const idCategory = req.params.idCategory;

    try {
        //  on récupère la liste des artisans dans la catégorie et on la renvoie.
        const craftsmen = await services.getByCategory(idCategory);
        return res.status(200).json(craftsmen);
        
    } catch (error) {
        return res.status(500).json(error);
    };
};