const {DataTypes} = require("sequelize");
const sequelize = require("./index");

const Contact = sequelize.define('Contact', {
    // Model attributes are defined here
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull:false
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
    timestamps: false
    
  });
  
module.exports = Contact;