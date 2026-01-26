import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: false,
            lowercase: true,
            trim: true,
            minLength: 3,
            maxLength: 30
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        },
        password:{
            type: String,
            required: true,
            minLength: 6,
            maxLength: 128
        }

    },
    {
        timestamps: true
    }
)
export const User = mongoose.model('User', userSchema);