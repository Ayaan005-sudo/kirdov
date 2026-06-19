require('dotenv').config();
const express =require('express');
const app = express();
const mongoose = require('mongoose');
const userModel = require("./model/userSchema");
const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin: "https://kirdov.vercel.app"
}));

async function main(){
   await mongoose.connect(process.env.MONGO_URI);
}
main()
.then(console.log("mongoose get connencted"))
.catch((e)=>console.log(e.message));


let port=3000;
app.listen(port,()=>{
    console.log("app is listening to the port");
});


app.post("/enquiry",async(req,res)=>{
    try{
let {username,email,mobile}=req.body;
const userEnquiry = await userModel.create({
    username,
    email,
    mobile,
});

console.log(userEnquiry);


res.status(201).json({userEnquiry,message:"work done"});
    }catch(e){
res.status(404).json({meesage:e.message});
    }



});




