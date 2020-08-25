const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    dialectOptions: {
        socketPath: dbConfig.socketPath
    },
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.test = require("./test-model.js")(sequelize, Sequelize);
db.User = require("./user.js")(sequelize, Sequelize);
db.countries = require("./countries")(sequelize, Sequelize);
db.status = require("./status")(sequelize, Sequelize);
db.state = require("./state")(sequelize, Sequelize);
db.role = require("./role")(sequelize, Sequelize);
db.organizations = require("./organization")(sequelize, Sequelize);
db.userOrganization = require("./userOrganization")(sequelize, Sequelize);
db.groups = require("./group")(sequelize, Sequelize);
db.userGroups = require("./userGroups")(sequelize, Sequelize);
db.audit = require("./audit")(sequelize, Sequelize);
db.artifact = require("./artifact")(sequelize, Sequelize);
db.artifactType = require("./artifactType")(sequelize, Sequelize);
db.artifactRating = require("./artifactRating")(sequelize, Sequelize);
db.UserArtifactComment = require("./userArtifactComment")(sequelize, Sequelize);

//relations
db.countries.hasMany(db.User)
db.status.hasMany(db.User)
db.state.hasMany(db.User)
db.role.hasMany(db.User)
db.organizations.hasMany(db.groups)
db.User.hasMany(db.audit)
db.User.hasMany(db.artifact)
db.status.hasMany(db.artifact)
db.artifactType.hasMany(db.artifact)
db.artifact.hasMany(db.artifactRating)
db.User.hasMany(db.UserArtifactComment)
db.artifact.hasMany(db.UserArtifactComment)
db.status.hasMany(db.UserArtifactComment)


module.exports = db;
