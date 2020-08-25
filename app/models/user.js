module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            // The email cannot be null, and must be a proper email before creation
            name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        },
        {
            underscored: true
        });
    return User;
};
