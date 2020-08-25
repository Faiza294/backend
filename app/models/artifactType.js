module.exports = function(sequelize, DataTypes) {
    let artifactType = sequelize.define("artifact_type", {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            artifact_type_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            artifact_type_description: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            underscored: true
        });
    return artifactType;
};
