'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lead extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lead.belongsToMany(models.Agent, {
        through: 'Assignment',
        foreignKey: 'leadId'
      });
      Lead.hasMany(models.Assignment, {
        foreignKey: 'leadId'
      });
    }
  };
  Lead.init({
    concern: DataTypes.STRING,
    savings: DataTypes.STRING,
    age: DataTypes.STRING,
    zip: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    agentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lead',
  });
  return Lead;
};