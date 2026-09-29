const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql'
    }
)

exports.initClientDbConnection = async () => {
    sequelize.authenticate()
        .then(() => {
            console.log('Connexion à MySQL réussie')
        })
        .catch((error) => {
            console.error('Impossible de se connecter à MySQL :', error)
        })
}

exports.sequelize = sequelize