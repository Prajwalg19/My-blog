import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";
import {customErrorType} from "./utils/customError";
import authRoutes from "./routes/authRoutes.ts"
dotenv.config();
const app = express();

app.use(express.json())
const corsOptions = {
    credentials: true,
    origin: ["http://localhost:5173"]
}
app.use(cors(corsOptions));
const port_number = process.env.PORT_NUMBER || 4500;
app.listen(port_number, () => {
    console.log(`Server started at port ${port_number}`)
})


const mongo_con_string = process.env.MONGO_CON_STRING!;
mongoose.connect(mongo_con_string).then(() => {
    console.log("Connection successful")
}).catch(() => {
    console.log("Couldn't connect to the database");
})

app.get("/", (req, res) => {
    res.send("Express server")
})
app.use("/auth/", authRoutes);


app.use((error: customErrorType, req: express.Request, res: express.Response, next: express.NextFunction) => {
    const message = error.message || "Internal server error";
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json(message);
})
