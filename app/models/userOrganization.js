module.exports = function(sequelize, DataTypes) {
    const UsersOrg = sequelize.define('user_org', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'organizations',
                key: 'id'
            }
        }
    });
    return UsersOrg;
};
