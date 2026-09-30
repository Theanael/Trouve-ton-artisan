const {Category, City, Speciality,Craftsman } = require('../models/associations')


exports.getById = async (id) => {
    const craftsman = await Craftsman.findByPk(id,{
        include:[City,Speciality]
    });
    return craftsman;
}



exports.getTop = async () => {
    const craftsmen = await Craftsman.findAll({
        attributes:['id','name','note'],
        include:[City,Speciality],
        where:{
          top: true
        }
    });
    return craftsmen;
}

exports.getByCategory = async (categoryId) => {
    const craftsmen = await Craftsman.findAll({
        attributes:['id','name','note'],
        include:[
            City,
            {
            model:Speciality,
            include: {
                model:Category,
                required:true,
                where:{id:categoryId}
            }
            }
        ]
    });
    return craftsmen;
}

