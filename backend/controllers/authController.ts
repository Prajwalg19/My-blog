import express from "express"
import userModel from "../models/userModel";
import bcryptjs from "bcrypt"
import customError from "../utils/customError";


type ControllerFuncDef = (req: express.Request, res: express.Response, next: express.NextFunction) => void

export const register: ControllerFuncDef = async (req, res, next) => {
    const {firstName, lastName, email, password, userPfp} = req.body;
    try {

        if (!firstName || !lastName || !email || !password || firstName == "" || lastName == "" || email == "" || password == "") {
            return next(customError("All fields are required", 400));// 400 bad Request
        }

        const hashedPass = bcryptjs.hashSync(password, 10);
        const query = new userModel({
            firstName,
            lastName,
            email,
            password: hashedPass,
            userPfp
        })
        await query.save();
        res.send("User registered");
    } catch (e) {
        if (next && e instanceof Error) {
            next(e);
        }
    }
}

