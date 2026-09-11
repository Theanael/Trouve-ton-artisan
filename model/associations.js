const Category = require('./category');
const Speciality = require('./speciality');
const Craftsman = require('./craftsman');
const City = require('./city');

Category.hasMany(Speciality, {
    foreignKey: 'id_category'
});

Speciality.belongsTo(Category, {
    foreignKey: 'id_category'
});

Speciality.hasMany(Craftsman, {
    foreignKey: 'id_speciality'
});

Craftsman.belongsTo(Speciality, {
    foreignKey: 'id_speciality'
});

City.hasMany(Craftsman, {
    foreignKey: 'id_city'
});

Craftsman.belongsTo(City, {
    foreignKey: 'id_city'
});

module.exports = {
    Category,
    Speciality,
    Craftsman,
    City
};