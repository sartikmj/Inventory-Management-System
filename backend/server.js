//importing all the dependencies
const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express(); //initializing express app


//setting up middlewares
app.use(express.json()); //to parse JSON data
app.use(express.urlencoded({extended:false})); //to parse URL-encoded data
app.use(bodyParser.json()); //to parse JSON data coming from frontend and to be used in backed, convert the data into object

//setting up routes
app.get("/", (req,res)=>{
    res.send("Welcome to the Inventory Management System API");
})


//setting up port
const PORT = process.env.PORT || 5000;

//connecting to the database ans start server
//we are directly connecting this file to the database using mongoose
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT, ()=>{
             console.log(`Server is runnning on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(`error connecting to the database: ${err}`);
    })

    //can also be done using async await
//     async function startServer() {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         app.listen(PORT, () => {
//             console.log(`Server running on port ${PORT}`);
//         });
//     } catch (err) {
//         console.error("Failed to connect to DB:", err);
//     }
// }
// startServer();
