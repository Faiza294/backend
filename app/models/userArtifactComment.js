module.exports = function(sequelize, DataTypes) {
    const UserArtifactComment = sequelize.define('user_artifact_comment', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        artifact_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        comment_delete_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return UserArtifactComment;
};
