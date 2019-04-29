const { User, Todo } = require('../models');

class TodoController {
    static createTodo(req, res, next) {
        Todo
            .create({ ...req.body, UserId: req.authenticatedUser.id })
            .then(newTodo => {
                res
                    .status(201)
                    .json(newTodo);
            })
            .catch(err => {
                next(err);
            });
    }

    static getAllUserTodo(req, res, next) {
        Todo
            .findAll({
                where: { UserId: req.authenticatedUser.id },
                include: [{ model: User }]
            })
            .then(todos => {
                res
                    .status(200)
                    .json(todos);
            })
            .catch(err => {
                next(err);
            });
    }

    static getOneTodo(req, res, next) {
        Todo
            .findByPk(req.params.id)
            .then(foundTodo => {
                if (foundTodo) {
                    res
                        .status(200)
                        .json(foundTodo);
                } else {
                    res
                        .status(404)
                        .json({
                            message: 'Todo not found'
                        });
                }
            })
            .catch(err => {
                next(err);
            });
    }

    static updateTodo(req, res, next) {
        Todo
            .findByPk(req.params.id)
            .then(foundTodo => {
                if (!foundTodo) {
                    res
                        .status(404)
                        .json({
                            message: 'Todo not found'
                        })
                } else {
                    return foundTodo.update(req.body)
                }
            })
            .then(updatedTodo => {
                res
                    .status(200)
                    .json(updatedTodo);
            })
            .catch(err => {
                next(err);
            });
    }

    static deleteTodo(req, res, next) {
        Todo
            .destroy({ where: { id: req.params.id } })
            .then(deletedTodo => {
                if (deletedTodo) {
                    res
                        .status(200)
                        .json({
                            message: "Todo deleted"
                        });
                } else {
                    res
                        .status(404)
                        .json({
                            message: 'Todo not found'
                        });
                }
            })
            .catch(err => {
                next(err);
            });
    }
}

module.exports = TodoController;
