const services = require('../services/craftsman');

exports.getById = async (req,res) => {
    const id = req.params.id

    try {
         // On essaie de récupérer l'artisan et si il n'existe pas on renvoie une erreur
        const craftsman = await services.getById(id);
        if (! craftsman) {
            return res.status(404).json({message:'craftsman not found'})
        }    

        return res.status(200).json(craftsman);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getTop = async (req,res) => {
    try {
        const craftsmen= await services.getTop();

        return craftsmen;
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getByCategory = async (req,res) => {
    const idCategory = req.params.idCategory;

    try {
        const craftsmen = await services.getByCategory(idCategory);

        return craftsmen;

        
    } catch (error) {
        return res.status(500).json(error);
    }
}