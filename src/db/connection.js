const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres://postgres:test123@localhost:5432/");
const connectionTest = async () => {
  try {
    await sequelize.authenticate();
    console.log("connection has been established");
  } catch (error) {
    console.log(error);
  }
};

connectionTest()



module.exports = sequelize;