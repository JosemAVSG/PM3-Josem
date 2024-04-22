import { Router } from "express";
import { createTurn, getAllTurns, cancelTurn, getTurnById } from "../controllers/turn.Controller";
const router = Router();

router.get('/appointments', getAllTurns )
router.get('/appointment/:id', getTurnById );

router.post('/appointment/schedule', createTurn );
router.put('/appointment/cancel', cancelTurn );
router.put('/appointment/reschedule', );



export default router;