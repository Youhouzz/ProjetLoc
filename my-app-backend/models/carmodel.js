// models/carmodel.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CarModel extends Model {
    static associate(models) {
      CarModel.belongsTo(models.CarBrand, { foreignKey: 'id_brand' });
      CarModel.hasMany(models.Car, { foreignKey: 'id_model' });
    }
  }

  CarModel.init({
    id_model: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'CarModel',
    tableName: 'CAR_MODEL',
  });

  return CarModel;
};
