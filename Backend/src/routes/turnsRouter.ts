import { Router } from "express";
import { createTurn, getAllTurns, cancelTurn, getTurnById } from "../controllers/turn.Controller";
import { authVerifyToken } from "../middlewares/validataToken";
const router = Router();

router.get('/turns', authVerifyToken , getAllTurns )
router.get('/turn/:id', authVerifyToken , getTurnById );

router.post('/turn/schedule', authVerifyToken  , createTurn );
router.put('/turn/cancel', authVerifyToken , cancelTurn );
// router.put('/turn/reschedule', );



export default router;