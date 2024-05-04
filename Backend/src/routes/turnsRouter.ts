import { Router } from "express";
import { createTurn, getAllTurns, cancelTurn, getTurnById, getTurnByUserId } from "../controllers/turn.Controller";
import { authVerifyToken } from "../middlewares/validataToken";
const router = Router();

router.get('/turns', authVerifyToken, getAllTurns )
router.get('/turns/user/:id',authVerifyToken,  getTurnByUserId );
router.get('/turns/:id',authVerifyToken, getTurnById );

router.post('/turns/schedule', authVerifyToken, createTurn );
router.put('/turns/cancel', authVerifyToken , cancelTurn );
// router.put('/turn/reschedule', );



export default router;