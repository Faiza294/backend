module.exports = function(sequelize, DataTypes) {
    let country = sequelize.define("countries", {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            country_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            country_description: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            underscored: true
        });
    return country;
};
