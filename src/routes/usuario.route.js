const { Router } = require('express');
const router = Router();

//controller
const {isAuth} = require('../controllers/usuario.middlewares')
const { usersAll, userByName,userById, postUser, deleteUser, Updateuser, FollowMe } =require('../controllers/usuario.controller')


//routes
// router.get('/login', login);
router.get('/', isAuth, usersAll);
router.get('/:name', isAuth, userByName);
router.get('/Id/:id', isAuth, userById);
router.post('/', isAuth, postUser); 
router.delete('/:id', isAuth, deleteUser);
router.put('/:id', isAuth, Updateuser)
router.put('/follow/:id', isAuth, FollowMe)




module.exports = router