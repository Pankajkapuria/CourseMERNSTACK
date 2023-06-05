const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const UserSchama = new mongoose.Schema({
    Name: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: Number,
        maxLength: 10,
    },
    password: {
        type: String,
        minLength: 5,
    }
});


UserSchama.methods.getnreateAuthTocken = async function () {
    try {
        const token = await jwt.sign({ _id: this._id }, process.env.SCREATE_KEY,
            { expiresIn: '1d' });
        return token;
    }
    catch (error) {
        console.log("jwt error");
    }
}

const UserRegister = mongoose.model('UserData', UserSchama);
module.exports = UserRegister;