const bcrypt = require('bcryptjs');

module.exports = {
    encrypt: (password) => {
        return bcrypt.hashSync(password, Number(process.env.SALT));
    },

    decrypt: (password, hashedPassword) => {
        return bcrypt.compareSync(password, hashedPassword);
    }
};
