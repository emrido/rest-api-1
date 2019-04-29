const jwt = require('jsonwebtoken');

module.exports = {
    generateToken: (userData) => {
        return jwt.sign(userData, process.env.JWT_SECRET);
    },

    decode: (token) => {
        return jwt.verify(token, process.env.JWT_SECRET);
    } 
}
