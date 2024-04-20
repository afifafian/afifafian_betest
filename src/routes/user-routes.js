import express from 'express';
import { UserControllers } from '../controllers/user.js';
import { authentication } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', UserControllers.insertUser);
router.post('/login', UserControllers.loginUser);

router.get('/', authentication, UserControllers.findUsers);
router.get('/:id', authentication, UserControllers.findById);
router.post('/', authentication, UserControllers.insertUser);
router.patch('/:id', authentication, UserControllers.updateUser);
router.delete('/:id', authentication, UserControllers.deleteUser);

export default router;
