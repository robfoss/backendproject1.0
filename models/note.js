'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Note.belongsTo(models.Lead, {
        foreignKey: 'leadId'
      });
      Note.belongsTo(models.Agent, {
        foreignKey: 'agentId'
      });
    }
  };
  Note.init({
    content: DataTypes.STRING,
    leadId: {
      type: DataTypes.INTEGER,
      references:'Lead',
      key: 'id'
    },
    agentId: {
      type: DataTypes.INTEGER,
      references: 'Agent',
      key: 'id'
    }
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};