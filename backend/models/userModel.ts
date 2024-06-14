import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    userPfp: {type: String, default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fuser-profile&psig=AOvVaw27npV3ke-jpjv-fAiFjFrH&ust=1718471109083000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiLtfXJ24YDFQAAAAAdAAAAABAJ"}
},
    {
        timestamps: true
    })


const userModel = mongoose.model("user", userSchema);
export default userModel;
