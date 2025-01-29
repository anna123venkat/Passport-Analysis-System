const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Email is required'],
    },
    role: {
        type: String,
        required: [true, 'Gender is required'],
    }
});


const loginModel = mongoose.model('login', loginSchema);

module.exports = loginModel;
