'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NewsletterEntries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      terms_accepted: {
        type: Sequelize.BOOLEAN
      },
      user_interested: {
        type: Sequelize.BOOLEAN
      },
      email_sent: {
        type: Sequelize.BOOLEAN
      },
      email_sent_date: {
        type: Sequelize.STRING
      },
      admin_email_sent: {
        type: Sequelize.BOOLEAN
      },
      admin_email_sent_date: {
        type: Sequelize.STRING
      },
      removal_key: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('NewsletterEntries');
  }
};