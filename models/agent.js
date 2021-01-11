'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Agent.belongsToMany(models.Lead, {
        through: 'Assignment',
        foreignKey: "agentId"
      } )
    }
  };
  Agent.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    state: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    hash: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Agent',
  });
  return Agent;
};