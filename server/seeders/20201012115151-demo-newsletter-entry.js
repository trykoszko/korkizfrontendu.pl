'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('NewsletterEntries', [{
      email: 'example@example.com',
      terms_accepted: true,
      user_interested: true,
      email_sent: true,
      email_sent_date: new Date(),
      admin_email_sent: true,
      admin_email_sent_date: new Date(),
      removal_key: 'test',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('NewsletterEntries', null, {});
  }
};
