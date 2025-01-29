
const userModel = require('../models/userModel');

// Controller for Query 2: Passport Issue Count by Kendra
const query2Controller = async (req, res) => {
  try {
    const startDate = new Date(req.query.startDate);
    const endDate = new Date(req.query.endDate);

    const result = await userModel.aggregate([
      {
        $match: {
          issue_date: {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
      {
        $group: {
          _id: '$issued_kendra',
          issueCount: { $sum: 1 },
        },
      },
      {
        $sort: { issueCount: -1 },
      },
    ]);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching data' });
  }
};

module.exports = { query2Controller };
