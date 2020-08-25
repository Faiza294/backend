module.exports = function(sequelize, DataTypes) {
    const UsersGroup = sequelize.define('user_group', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'groups',
                key: 'id'
            }
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modified_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return UsersGroup;
};
