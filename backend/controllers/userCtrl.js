const userModel = require('../models/userModel');

// Controller for user registration
const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(200).send({
        message: 'User already exists',
        success: false,
      });
    }

    // Create a new user object with the required fields
    const newUser = new userModel({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      mobile: req.body.mobile,
      dob: req.body.dob,
      age: req.body.age,
      gender: req.body.gender,
      address: req.body.address,
      passportNumber: req.body.passportNumber,
      issue_date: req.body.issue_date,
      expiry_date: req.body.expiry_date,
      passport_type: req.body.passport_type,
      amount: req.body.amount,
      issued_kendra: req.body.issued_kendra
    });

    await newUser.save();
    res.status(201).send({
      message: 'Registered Successfully',
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Register controller',
    });
  }
};


module.exports = { registerController };
