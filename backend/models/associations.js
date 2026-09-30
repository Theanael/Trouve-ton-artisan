const Category = require('./category');
const Speciality = require('./speciality');
const City = require('./city');
const Craftsman = require('./craftsman');


// Relation Catégorie-Spécialité
Category.hasMany(Speciality, {
    foreignKey: 'id_category'
});
Speciality.belongsTo(Category, {
    foreignKey: 'id_category'
});


// Relation Artisan-Spécialité
Speciality.hasMany(Craftsman, {
    foreignKey: 'id_speciality'
});
Craftsman.belongsTo(Speciality, {
    foreignKey: 'id_speciality'
});


// Relation Artisan-Ville
City.hasMany(Craftsman, {
    foreignKey: 'id_city'
});
Craftsman.belongsTo(City, {
    foreignKey: 'id_city'
});

module.exports= {
    Category,
    Speciality,
    City,
    Craftsman
}