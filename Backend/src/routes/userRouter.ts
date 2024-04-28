
import { createUser,getUser, getUserById, loginUser } from "../controllers/user.Controller";
import { Router } from "express";
import auth from "../middlewares/auth";


const router = Router();

router.get('/users', getUser );
router.get('/users/:id', getUserById );

router.post('/users',)
router.post('/users/resgister', createUser );
router.post('/users/login',auth, loginUser);


export default router;