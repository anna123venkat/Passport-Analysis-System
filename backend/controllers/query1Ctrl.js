const userModel = require('../models/userModel');

const query1Controller = async (req, res) => {
    try {
        //const { startDate, endDate, kendra, category, gender } = req.query;
        const startDate = new Date(req.query.startDate);
        const endDate = new Date(req.query.endDate);
        const kendra = req.query.kendra;
        const category = req.query.category;
        const gender = req.query.gender;
        const ageConstraint = category === 'adult' ? { $gte: 18 } : { $lte: 18 };

        const result = await userModel.aggregate([
            {
                $match: {
                    issue_date: {
                        $gte: startDate,
                        $lte: endDate
                    },
                    issued_kendra: kendra,
                    gender: gender,
                    age: ageConstraint
                }
            },
            {
                $project: {
                    _id: 0,
                    passportNumber: 1,
                    first_name: 1,
                    last_name: 1
                }
            }
        ]);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error fetching data' });
    }
};

module.exports = { query1Controller };
