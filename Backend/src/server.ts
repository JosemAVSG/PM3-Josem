import express from "express";
import router from "./routes/indexRouter";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/userRouter";
import turnsRouter from "./routes/turnsRouter";
import cookieParser from "cookie-parser";
const app = express();

app.use(morgan("dev"));
app.use(cors({ 
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/", router);
app.use("/", userRouter);
app.use("/", turnsRouter);

export default app;
