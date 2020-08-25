module.exports = function(sequelize, DataTypes) {
    let audit = sequelize.define("audits", {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            action: {
                type: DataTypes.STRING,
                allowNull: false
            },
            action_values: {
                type: DataTypes.STRING,
                allowNull: false
            },
            action_table: {
                type: DataTypes.STRING,
                allowNull: false
            },
            action_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            action_by: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            value_id: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            underscored: true
        });
    return audit;
};
