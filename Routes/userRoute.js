const express = require('express');
const router = express.Router();
const UserData = require("../models/UserModal/userSchama");
const bcrypt = require('bcrypt');
const validator = require('validator');
// const getnreateAuthTocken = require("../models/UserModal/userSchama");
const autuAction = require("../middlewh/autuAction")

// user add add registration route method post
router.route('/registration').post(async (req, res) => {
    let error = [];
    try {
        let { Name, email, phoneNumber, password, ConfromPassword } = req.body;

        // valid mendatry
        if (!Name || !email || !phoneNumber || !password || !ConfromPassword) {
            error.push({ msg: "All field are Mendtary" })
        }
        // email validator
        if (!validator.isEmail(email)) {
            error.push({ "msg": "filed right email" })
        }

        // passeord lenght chack haspassword
        let hashPassword = '';
        if (password.length < 6) {
            error.push({ "msg": "min length of password should be 6" })
        } else {
            hashPassword = await bcrypt.hash(password, 10);
        }

        // password and confrom password chack;
        if (password != ConfromPassword) {
            error.push({ msg: "password do't match" })
        }

        // email chack
        const emailfind = await UserData.findOne({ email: email })
        if (emailfind) {
            console.log(emailfind.Name);
            error.push({ "msg": "email is alreay present" })
        }

        if (error.length > 0) {
            let dataaa = JSON.stringify(error);
            error = [];
            res.status(400).send(dataaa);
        }
        else {
            const User = new UserData({
                Name,
                email,
                phoneNumber,
                password: hashPassword,
            })

            // generate auth token
            const authToken = await User.getnreateAuthTocken();
            const Udata = await User.save();
            res.send({ Udata, authToken });
        }
    }
    catch (error) {
        res.status(400).send("error ocured");
    }

})

// user login route '/login'
router.route('/login').post(async (req, res) => {
    try {
        const { email, password } = req.body;
        const error = [];
        // all fild are mendatry
        if (!email || !password) {
            error.push({ "msg": "all filed are mendtary" });
        }

        // vlaidtion chack
        if (!validator.isEmail(email)) {
            error.push({ "msg": "please field right email" });
        }

        // password lenght
        let hashPassword = '';
        if (password) {
            hashPassword = await bcrypt.hash(password, 10);
        }


        // find error or not find error
        if (error.length > 0) {
            res.status(400).send(error);
        }
        else {
            const logindata = await UserData.findOne({ email: email });

            // generate auth token


            if (!logindata) {
                res.status(400).send({ msg: "email is not find please do first registerion" });
            }
            else {
                const authToken = await logindata.getnreateAuthTocken();
                if (await bcrypt.compare(password, logindata.password)) {
                    res.send({
                        msg: "redirect Home useAuth",
                        token: authToken
                    });
                }
                else {
                    res.status(400).send({ msg: "passwprd do not match and redirect again login page" });
                }
            }
        }
    }
    catch (error) {
        res.status(400).send({ msg: "passwprd do not match and redirect again login page" });
    }
})


router.route('/Contact').get(autuAction, async (req, res) => {
    res.status(200).send({ "msg": "ok" });
})


module.exports = router;