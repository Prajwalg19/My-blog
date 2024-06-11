import express from "express"
import userModel from "../models/userModel";
import bcryptjs from "bcrypt"
import customError from "../utils/customError";

type ControllerFuncDef = (req: express.Request, res: express.Response, next: express.NextFunction) => void

export const register: ControllerFuncDef = async (req, res, next) => {
    const {userName, email, password, userPfp} = req.body;
    function isMongoServerError(e: any) {
        return e && e.code == 11000;
    }
    try {

        if (!userName || !email || !password || userName == "" || email == "" || password == "") {
            return next(customError("All fields are required", 400));// 400 bad Request
        }

        const hashedPass = bcryptjs.hashSync(password, 10);
        const query = new userModel({
            userName,
            email,
            password: hashedPass,
            userPfp
        })
        await query.save();
        res.status(201).json("user created successfully");
    } catch (e: unknown) {
        if (isMongoServerError(e)) {
            next(customError("Email or Username already exists", 409))
        }
        else {
            next(e)
        }
    }
}


