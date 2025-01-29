const loginModel = require('../models/loginModel');

const loginController = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (role === 'admin') {
            const adminUser = await loginModel.findOne({ email, password, role: 'admin' });

            if (adminUser) {
                return res.status(200).send({
                    message: 'Routing to Passport Analysis page...',
                    isAdmin: true,
                });
            } else {
                return res.status(200).send({
                    message: 'Invalid admin credentials.',
                    isAdmin: false,
                });
            }
        }

        const existingUser = await loginModel.findOne({ email });

        if (existingUser && role === 'client') {
            return res.status(200).send({
                message: 'Your passport is already registered with us!',
                isClient: false,
            });
        }
        else {
            const newLogin = new loginModel({
                email,
                password,
                role,
            });

            await newLogin.save();
            res.status(201).send({
                message: 'Login Successful',
                isClient: true,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Login controller',
        });
    }
};

module.exports = { loginController };

