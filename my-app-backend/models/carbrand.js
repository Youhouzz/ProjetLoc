// models/carbrand.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CarBrand extends Model {
    static associate(models) {
      CarBrand.hasMany(models.CarModel, { foreignKey: 'id_brand' });
    }
  }

  CarBrand.init({
    id_brand: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_marque: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'CarBrand',
    tableName: 'CAR_BRAND',
  });

  return CarBrand;
};
