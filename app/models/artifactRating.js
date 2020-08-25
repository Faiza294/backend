module.exports = function(sequelize, DataTypes) {
    let artifactRating = sequelize.define("artifact_rating", {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            artifact_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            artifact_rating: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            underscored: true
        });
    return artifactRating;
};
