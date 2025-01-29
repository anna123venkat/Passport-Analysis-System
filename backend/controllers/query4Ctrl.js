const userModel = require('../models/userModel');

const query4Controller = async (req, res) => {
  try {
    const startDate = new Date(req.query.startDate);
    const endDate = new Date(req.query.endDate);
    const k = parseInt(req.query.k);
    const result = await userModel.aggregate([
      {
        $match: {
          passport_type: 'tatkal',
          issue_date: {
            $gte: startDate,
            $lte: endDate
          },
        },
      },
      {
        $group: {
          _id: '$issued_kendra',
          count: { $sum: 1 }
        },
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: k
      }
    ]);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching data' });
  }
};

module.exports = { query4Controller };
