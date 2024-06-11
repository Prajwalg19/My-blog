import express from "express";
import {register} from "../controllers/authController.ts";
const route = express.Router();

route.post("/register", register);

export default route;
