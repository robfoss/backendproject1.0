'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Assignment.belongsTo(models.Lead,{
        foreignKey: 'leadId'
      });
      Assignment.belongsTo(models.Agent, {
        foreignKey: 'agentId'
      });
    }
  };
  Assignment.init({
    agentId:{
      type: DataTypes.INTEGER,
      references: {
        model: 'Agent',
        key: 'id'
      }
    },
     
    leadId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Lead',
        key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'Assignment',
  });
  return Assignment;
};