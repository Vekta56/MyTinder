const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const validator = require('validator');
const bcrypt = require("bcrypt");


const userShema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50,
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 500,
    },
    emailID: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 4,
        maxLength: 70,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Почта введена неккоректно!");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 200,
    },
    profilePicture: {
        type: String,
        default: "https://i.pinimg.com/736x/9f/16/72/9f1672710cba6bcb0dfd93201c6d4c00.jpg"
    },
    gender: {
        type: String,
        validate(value) {
            if (!["male", "female"].includes(value)) {
                throw new Error("Ошибка при вводе гендера!");
            }
        },
    },
    about: {
        type: String,
        default: "Hello my friends!",
        minLength: 5,
        maxLength: 200,
    },
    skills: {
        type: [String],
        default: [],
        validate(value) {
            const maxSkills = 50;
            const maxSymb = 25;

            if (value.length > maxSkills) {
                throw new Error("Слишком много скиллов! Максимум " + maxSkills);
            }
            for (let i = 0; i < value.length; i++) {
                if (value[i].length > maxSymb) {
                    throw new Error("Слишком длинное описание для скилла! " + value[i] + " <= должен иметь максимум " + maxSymb + " символов.");
                }
            }
        },
    },
},
{timestamps: true}
);

userShema.methods.getJWT = async function () {
    const user = this;
    
    token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    return token;
}

userShema.methods.validatePassword = async function (passwordInputByUser) {
    const user = this;
    
    isCorrectPassword = await bcrypt.compare(passwordInputByUser, user.password);

    return isCorrectPassword;
}

const User = mongoose.model("User", userShema);

module.exports = User;

