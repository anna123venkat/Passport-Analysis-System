const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'First Name is required'],
    },
    last_name: {
        type: String,
        required: [true, 'Last Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    mobile: {
        type: Number,
        required: [true, 'Mobile number is required']
    },
    dob: {
        type: Date, // Use Date type for Date of Birth
    },
    age: {
        type: Number, // Use Number type for Age
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    passportNumber: {
        type: String,
        required: [true, 'Passport Number is required'],
    },
    issue_date: {
        type: Date, // Use Date type for Issue Date
    },
    expiry_date: {
        type: Date, // Use Date type for Expiry Date
    },
    passport_type: {
        type: String,
        enum: ['normal', 'tatkal'], // Define valid passport type values
    },
    amount: {
        type: Number, // Use Number type for Amount
    },
    issued_kendra: {
        type: String,
        required: [true, 'Kendra name is required']
    }
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
