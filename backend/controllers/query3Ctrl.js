const userModel = require('../models/userModel');


const query3Controller = async (req, res) => {
    try {
        const startDate = new Date(req.query.startDate);
        const endDate = new Date(req.query.endDate);

        const result = await userModel.aggregate([
            {
                $match: {
                    issue_date: {
                        $gte: startDate,
                        $lte: endDate
                    }
                }
            },
            {
                $group: {
                    _id: "$issued_kendra",
                    revenue: { $sum: "$amount" }
                }
            }
        ]);

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error fetching data' });
    }
};

module.exports = { query3Controller };
