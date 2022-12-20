module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        // id: {
        //     type: Sequelize.INTEGER,
        //     primaryKey: true
        // },
        email: {
            allowNull: false,
            unique: true,
            type: Sequelize.STRING
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING
        },
    },
    {
        schema: "portfolio",
        freezeTableName: true,
        timestamps: false,
        createdAt: true,
        updatedAt: true,
    });

    return User;
};