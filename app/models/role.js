module.exports = function(sequelize, DataTypes) {
    let role = sequelize.define("roles", {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            role_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            role_description: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            underscored: true
        });
    return role;
};
