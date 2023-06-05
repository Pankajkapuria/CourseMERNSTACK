const mongoose=require('mongoose');

const connect=async ()=>{
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/CourseBackend');
        console.log("Connection is Sucessfully")
    }
    catch (error) {
        console.log("Connetion is not sucessfully")
    }
}

connect();