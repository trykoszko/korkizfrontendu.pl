'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsletterEntry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NewsletterEntry.init({
    email: DataTypes.STRING,
    terms_accepted: DataTypes.BOOLEAN,
    user_interested: DataTypes.BOOLEAN,
    email_sent: DataTypes.BOOLEAN,
    email_sent_date: DataTypes.STRING,
    admin_email_sent: DataTypes.BOOLEAN,
    admin_email_sent_date: DataTypes.STRING,
    removal_key: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NewsletterEntry',
  });
  return NewsletterEntry;
};
