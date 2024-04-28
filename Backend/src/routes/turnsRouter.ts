import { Router } from "express";
import { createTurn, getAllTurns, cancelTurn, getTurnById } from "../controllers/turn.Controller";
const router = Router();

router.get('/turns', getAllTurns )
router.get('/turn/:id', getTurnById );

router.post('/turn/schedule', createTurn );
router.put('/turn/cancel', cancelTurn );
router.put('/turn/reschedule', );



export default router;