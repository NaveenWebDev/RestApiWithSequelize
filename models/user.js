const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:'John'
},
  lastName: {
    type: DataTypes.STRING,
    allowNull :false,
    defaultValue:'Doe'
  }
}, {
  // Other model options go here
//   modelName:'Users'
    tableName:'users',
    timestamps:false
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
module.exports = User;