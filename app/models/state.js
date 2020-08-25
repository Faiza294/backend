module.exports = function(sequelize, DataTypes) {
    let state = sequelize.define("states", {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            status_name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            underscored: true
        });
    return state;
};
