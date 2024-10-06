// models/ad.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ad extends Model {
    static associate(models) {
      Ad.belongsTo(models.User, { foreignKey: 'id_user' });
      Ad.hasMany(models.Car, { foreignKey: 'id_car' });
    }
  }

  Ad.init({
    id_ad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    manufacture_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    publication_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Ad',
    tableName: 'AD',
  });

  return Ad;
};
