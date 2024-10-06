// models/car.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      Car.belongsTo(models.CarModel, { foreignKey: 'id_model' });
      Car.hasMany(models.Ad, { foreignKey: 'id_car' });
    }
  }

  Car.init({
    id_car: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    manufacture_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    technical_caracteristics: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fuel_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transmission: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_model: {
      type: DataTypes.INTEGER,
      references: {
        model: 'CarModel',
        key: 'id_model'
      },
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Car',
    tableName: 'CAR',
  });

  return Car;
};
