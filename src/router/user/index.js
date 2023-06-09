import Express from 'express';
import { createUser, deleteteUser, getAllUsers, getAllUsersData, updateUser } from '../../controllers/user.js';
import { loginController } from '../../controllers/authentication.js';
import { validateJwt } from '../../middleware/validateJwt.js';


const userRouter = new Express();

userRouter.post('/register', createUser)
userRouter.post('/login', loginController)
userRouter.delete('/:userId', validateJwt, deleteteUser)
userRouter.put('/:userId', updateUser)
userRouter.get('/users', getAllUsers)
userRouter.get('/allUsers', getAllUsersData)

export default userRouter;
