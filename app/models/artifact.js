module.exports = function(sequelize, DataTypes) {
    let artifact = sequelize.define("artifacts", {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            artifact_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            file_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            organization: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            uploaded_by: {
                type: DataTypes.STRING,
                allowNull: false
            },
            artifact_description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            summary_text: {
                type: DataTypes.STRING,
                allowNull: false
            },
            created_by: {
                type: DataTypes.STRING,
                allowNull: false
            },
            modified_by: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            artifact_type_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            user_artifact_comment_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            status_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            file_address: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            underscored: true
        });
    return artifact;
};
