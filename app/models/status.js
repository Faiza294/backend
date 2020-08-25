module.exports = function(sequelize, DataTypes) {
    let status = sequelize.define("status", {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            status_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            status_type: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            underscored: true
        });
    return status;
};
