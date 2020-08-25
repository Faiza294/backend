module.exports = function(sequelize, DataTypes) {
    let group = sequelize.define("groups", {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            group_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            group_description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            parent_group_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            org_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            underscored: true
        });
    group.associate = (models) => {
        group.belongsToMany(models.User, {
            through: 'user_group',
            as: 'User',
            foreignKey: 'group_id'
        });
    };
    return group;
};
