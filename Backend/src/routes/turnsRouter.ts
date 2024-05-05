import { Router } from "express";
import { createTurn, getAllTurns, cancelTurn, getTurnById, getTurnByUserId } from "../controllers/turn.Controller";
import { authVerifyToken } from "../middlewares/validataToken";
const router = Router();

router.get('/turns', getAllTurns )
router.get('/turns/user/:id', getTurnByUserId );
router.get('/turns/:id', getTurnById );

router.post('/turns/schedule', createTurn );
router.put('/turns/cancel', cancelTurn );
// router.put('/turn/reschedule', );



export default router;