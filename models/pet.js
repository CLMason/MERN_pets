const mongoose = require("mongoose");
console.log("inside the pet model");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be 3 characters or longer"]
    },
    type: {
        type: String,
        required: [true, "Genre is required"],
        minlength: [3, "Genre must be 3 characters or longer"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be 3 characters or longer"]
    },
    skill_1 : {
        type: String
    },
    skill_2 : {
        type: String
    },
    skill_3 : {
        type: String 
    },
    likes: {
        type: Number,
        default: 0 
    }

}, {timestamps: true});

mongoose.model("Pet", PetSchema);

