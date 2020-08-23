module.exports = {
    HOST: "35.188.254.201",
    USER: "root",
    PASSWORD: "P*ssw0rd1!",
    DB: "falconwing",
    socketPath: "/cloudsql/falconwing-backend:us-east4:falconwingdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
