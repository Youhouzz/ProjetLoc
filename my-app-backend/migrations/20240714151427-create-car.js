'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      manufacture_date: {
        type: Sequelize.DATE
      },
      technical_caracteristics: {
        type: Sequelize.TEXT
      },
      condition: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      fuel_type: {
        type: Sequelize.STRING
      },
      transmission: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};