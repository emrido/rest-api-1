const { User }          = require('../models/');
const { generateToken } = require('../helpers/jwt');
const { decrypt }       = require('../helpers/bcyrpt');

class AuthController {
    static signIn(req, res, next) {
        User
            .findOne({ where: { email: req.body.email } })
            .then(user => {
                if (!user) {
                    res
                        .status(404)
                        .json({
                            message: 'User not found'
                        });
                } else {
                    if (decrypt(req.body.password, user.password)) {
                        res
                            .status(200)
                            .json({
                                accesstoken: generateToken({
                                    id: user.id,
                                    email: user.email
                                })
                            });
                    } else {
                        res
                            .status(403)
                            .json({
                                message: 'Wrong password'
                            });
                    }
                }
            })
            .catch(err => {
                next(err);
            });
    }

    static signUp(req, res, next) {
        User
            .create(req.body)
            .then(newUser => {
                res
                    .status(201)
                    .json(newUser);
            })
            .catch(err => {
                next(err);
            });
    }
}

module.exports = AuthController;
