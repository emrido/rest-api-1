'use strict';
const { encrypt } = require('../helpers/bcyrpt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email is required'
        },
        isEmail: {
          args: true,
          msg: 'Email is not valid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password is required'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: function(user, option) {
        user.password = encrypt(user.password, Number(process.env.SALT));
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};