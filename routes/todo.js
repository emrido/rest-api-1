const router                      = require('express').Router();
const TodoController              = require('../controllers/todo');
const { authenticate, authorize } = require('../middlewares/auth');

router.use(authenticate)

router.get('/', TodoController.getAllUserTodo);
router.post('/', TodoController.createTodo);
router.get('/:id', authorize, TodoController.getOneTodo);
router.delete('/:id', authorize, TodoController.deleteTodo);
router.patch('/:id', authorize, TodoController.updateTodo);

module.exports = router;
