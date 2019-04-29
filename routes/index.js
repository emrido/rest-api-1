const router         = require('express').Router();
const todoRoute      = require('./todo');
const errorHandler   = require('../middlewares/errorHandler');
const AuthController = require('../controllers/auth');

router.post('/api/signup', AuthController.signUp);
router.post('/api/signin', AuthController.signIn);

router.use('/api/todos', todoRoute);

router.use(errorHandler);

module.exports = router;
