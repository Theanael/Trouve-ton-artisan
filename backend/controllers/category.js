
const services = require('../services/category')

exports.getAll = async (req,res) => {
    try {
        const categories=await services.getAll()
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getById =async(req,res) => {
    const id = req.params.id;

    try {
        // On essaie de récupérer la catégorie et si elle n'existe pas on renvoie une erreur
        const category= await services.getById(id)
        if (!category) {
            return res.status(404).json({message:'catway not found'})
        }        

        // On renvoie la catégorie
        return res.status(200).json(category);

    } catch (error) {
        return res.status(500).json(error);
    }
}