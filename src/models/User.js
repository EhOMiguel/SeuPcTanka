const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: true
    },
    processador: {
        type: String
    },
    gpu: {
        type: String
    },
    ram: {
        type: String
    }
}, {timestamps: true});


module.exports = user = mongoose.model('user', userSchema);
