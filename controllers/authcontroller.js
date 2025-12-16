import { myDB } from "../Backend/database/db.js";
import bcrypt from "bcrypt";
export const registerUser=(req,res)=>{
    const {username,role,password}=req.body;
    bcrypt.hash(password,10,(err,hash)=>{
        if(err)
            return res.status(500).json({message:"Error hashing password"});
        myDB.query("INSERT INTO user (username,role,password) VALUES (?,?,?)",
        [username,role,hash],
        (err)=>{
            if(err){
                return res.status(500).json({message:"Error registering user"});
            }
            return  res.status(200).json({message:"User registered successfully"});
        });
    });
}