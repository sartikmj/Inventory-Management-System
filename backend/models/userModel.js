//Model of data for user
const mongoose = require("mongoose");

// Defining the schema for the user
const userSchema = mongoose.Schema({
    //properties of the user(this Schema)
    name: {
        type: String,
        required: [true, "Please Enter your name"], //this field is required, if user did not enter name, and req come to backend it will show this message    
        trim: true //to remove any extra spaces from the beginning and end of the string
    },
    email: {
        type: String,
        requird: [true, "Please Enter your email"],
        unique: true, //this field should be unique, no two users can have same email
        trim: true,
        //validating email format using regex
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please Enter a valid email address"
        ]
    },
    password: {
        type: String,
        required: [true, "Please Enter your password"],
        minLength: [6, "Password must be at least 6 characters long"], //password should be at least 6 characters long
        maxLength: [30, "Password must be at most 30 characters long"],
    },
    photo: {
        type: String,
        required: [true, "Please add your photo"],
        //so that users don't be forced to upload photo, we can give it a default value
        default: "https://as1.ftcdn.net/v2/jpg/07/24/59/76/1000_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg"
    },
    phone: {
        type: String,
        default: "+91",
    },
    bio: {
        type: String,
        maxLength: [250, "Bio must not be more than 250 characters"],
        default: "Bio..."
    }
}, {
    //automatically adding the property "the time you updated that" to this data
    timestamps: true,
});

// Exporting the User model
const User = mongoose.model("User", userSchema); //"name of the model", schema
//going to use this variable User to interact with the database
module.exports = User; 