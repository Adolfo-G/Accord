const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Channel extends Model {};

Channel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      channelName: {
          type : DataTypes.STRING,
          allowNull: false,
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'channel',
    }
  );
  
  module.exports = Channel;