import express from "express"
import dotenv from "dotenv"
dotenv.config();
const app = express();

const port_number = process.env.PORT_NUMBER || 4500;
app.listen(port_number, () => {
    console.log(`Server started at port ${port_number}`)
})

app.get("/", (req, res) => {
    res.send("Express server")
})
