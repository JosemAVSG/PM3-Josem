
import { createUser,getUser, getUserById } from "../controllers/user.Controller";
import { Router } from "express";

const router = Router();

router.get('/users', getUser );
router.get('/users/:id', getUserById );

router.post('/users',)
router.post('/users/resgister', createUser );
router.post('/users/login',);


export default router;