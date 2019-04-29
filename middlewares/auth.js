const { decode } = require('../helpers/jwt');
const { Todo }   = require('../models');

module.exports = {
    authenticate: (req, res, next) => {
        if (req.headers.accesstoken) {
            try {
                req.authenticatedUser = decode(req.headers.accesstoken);
                
                next();
            } catch (err) {
                next(err);
            }
        } else {
            res
                .status(400)
                .json({
                    message: 'Please provide access token'
                })
        }
    },

    authorize: (req, res, next) => {
        Todo
            .findByPk(req.params.id)
            .then(foundTodo => {
                if(!foundTodo) {
                    res
                        .status(404)
                        .json({
                            message: 'Todo not found'
                        })
                } else {
                    if (req.authenticatedUser.id != foundTodo.UserId) {
                        res
                            .status(403)
                            .json({
                                message: 'Not authorized'
                            })
                    } else {
                        next()
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }
};
