module.exports = (sequelize, DataTypes) => {

    const product = sequelize.define("product", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        Published: {
            type: DataTypes.BOOLEAN
        }

    })

    return Product
    
}