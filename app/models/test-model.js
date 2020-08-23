module.exports = (sequelize, Sequelize) => {
    const test = sequelize.define("test", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return test;
};
