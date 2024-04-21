import express from "express";
import router from "./routes/indexRouter";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/userRouter";
import turnsRouter from "./routes/turnsRouter";
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use("/", userRouter);
app.use("/", turnsRouter);

export default app;
