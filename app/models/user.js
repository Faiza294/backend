module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            middle_initial: {
                type: DataTypes.STRING,
                allowNull: true
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            job_title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            notification: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            address: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            zip_code:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            city: {
                type: DataTypes.STRING,
                allowNull: true
            },
            created_by: {
                type: DataTypes.STRING,
                allowNull: false
            },
            modified_by: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            user_interest_id: { // latest
                type: DataTypes.INTEGER,
                allowNull: true
            },
            country_id: { // latest
                type: DataTypes.INTEGER,
                allowNull: true
            },
            state_id: { // latest
                type: DataTypes.INTEGER,
                allowNull: true
            },
            status_id: { // latest
                type: DataTypes.INTEGER,
                allowNull: true
            },
            role_id: { // latest
                type: DataTypes.INTEGER,
                allowNull: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            underscored: true
        });
    User.associate = (models) => {
        User.belongsToMany(models.organizations, {
            through: 'user_org',
            as: 'organizations',
            foreignKey: 'user_id'
        });
    };
    User.associate = (models) => {
        User.belongsToMany(models.groups, {
            through: 'user_group',
            as: 'groups',
            foreignKey: 'user_id'
        });
    };
    return User;
};
