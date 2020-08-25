module.exports = function(sequelize, DataTypes) {
    let organization = sequelize.define("organizations", {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            org_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            org_description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            parent_org_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        },
        {
            underscored: true
        });
    organization.associate = (models) => {
        organization.belongsToMany(models.User, {
            through: 'user_org',
            as: 'User',
            foreignKey: 'organization_id'
        });
    };
    return organization;
};
