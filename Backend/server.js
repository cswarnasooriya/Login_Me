const express = require("express");
const app = express();
const cors = require('cors');

const port= 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://root:1234@loginme.y47jlba.mongodb.net/";

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB!");
    }
    catch(error){
        console.log('MongoDB Error', error); 
    }
};


connect();


const server = app.listen(port, host , ()=>{
    console.log(`App is running on ${server.address().port}`)
});

app.use('/api', router);//middleware 