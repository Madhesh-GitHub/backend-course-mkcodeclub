
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Todo from "./models/Todo.js";
import todoRouter from './routes/todoRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());  // important middleware


app.use('/api/todos', todoRouter);

// HEALTH CHECK END POINT
app.get("/api/health-check", (req, res)=>{
    res.status(200).json({msg: "Todo APP's backend is running"});
})

// Server starting
const PORT = process.env.PORT;
app.listen(PORT, async ()=>{
    await connectDB();
    console.log("Server is running in port: ", PORT);
});