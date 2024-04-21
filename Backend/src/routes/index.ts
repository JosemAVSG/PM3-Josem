import { Router } from "express";
import { createUser } from "../controllers/user.Controller";

const router = Router();

router.get('/users',);
router.get('/users/:id',);


router.post('/users',)
router.post('/users/resgister', createUser );
router.post('/users/login',);

router.get('/appointments',)
router.get('/appointment/:id',);
router.post('/appointment/schedule',);
router.put('/appointment/cancel',);

router.put('/users',)
router.delete('/users',)
export default router