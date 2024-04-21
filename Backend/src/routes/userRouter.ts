
import { createUser } from "../controllers/user.Controller";
import router from "./indexRouter"; 
const userRouter = router;

userRouter.get('/users',);
userRouter.get('/users/:id',);


userRouter.post('/users',)
userRouter.post('/users/resgister', createUser );
userRouter.post('/users/login',);


export default userRouter;