const jwt = require('jsonwebtoken');
const User = require('../models/UserModal/userSchama');
const AutuAction = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        const token = authHeader.split(' ')[1]
        const verifyToken = await jwt.verify(token, "pankajpankajpankajpankajpankajpankajpankaj");
        req.user = { userId: verifyToken._id }
        const rootUser = await User.findOne({ _id: verifyToken._id });
        if (!rootUser) {
            throw new Error('User Not Found');
        }
        else {
            next();
        }
    }
    catch (error) {
        console.log("not token")
        res.status(400).send('No token');
    }
}
module.exports = AutuAction; 
