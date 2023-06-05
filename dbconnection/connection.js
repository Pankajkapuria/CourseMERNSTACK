const mongoose = require('mongoose');

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("Connection is Sucessfully")
    }
    catch (error) {
        console.log("Connetion is not sucessfully")
    }
}

connect();