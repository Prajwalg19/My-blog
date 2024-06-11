import express from "express"
import userModel from "../models/userModel";
import bcryptjs from "bcrypt"
import customError from "../utils/customError";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import {Document} from "mongodb";
dotenv.config();

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


export const login: ControllerFuncDef = async (req, res, next) => {
    const {email, password} = req.body;

    try {
        if (!email || !password || email == "" || password == "") {
            return next(customError("All fields are required", 400));
        }
        const query: typeof userModel & Document | null = await userModel.findOne({email})
        if (query) {
            if (query?.password) {
                const isPassword = bcryptjs.compareSync(password, query.password);
                if (isPassword) {
                    const token = jwt.sign({id: query._id}, process.env.JWT_SEC_KEY as string, {expiresIn: "2d"})
                    const {password, ...rest} = query._doc
                    res.cookie("my_cookie", token, {httpOnly: true}).status(200).json(rest)

                } else {
                    res.status(401).json({message: "Password is incorrect"})
                }
            }
        } else {
            return next(customError("User doesn't exist", 404))
        }
    } catch (e: unknown) {
        next(e);
    }

}
