const validator = require("validator");

const validateSignUpData = (req) => {
    const {firstName, lastName, emailID, password} = req.body;
    
    if (!firstName || !lastName) {
        throw new Error("Name is not valid!");
    } else if (!validator.isEmail(emailID)) {
        throw new Error("Email is not valid!");
    } else if (!validator.isStrongPassword(password)) {
        throw new Error("Password is not strong!");
    }
};

const validateEditProfileData = (req) => {
    const editAllowed = [
        "firstName",
        "lastName",
        "age",
        "profilePicture",
        "gender",
        "about",
        "skills",
        "emailID"
    ];

    const isEditAllowed = Object.keys(req.body).every((field) => editAllowed.includes(field));

    return isEditAllowed;
};

const validatePasswordProfileData = (newPassword, currentPasswordCheck, user) => {
    const isCorrectPassword = user.validatePassword(currentPasswordCheck);
    if (!validator.isStrongPassword(newPassword)) {
        throw new Error("Password is not strong!");
    } else if (!isCorrectPassword) {
        throw new Error("Current password is incorrect!")
    }
};

module.exports = { validateSignUpData, validateEditProfileData, validatePasswordProfileData};