const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get token from request headers
    const token = req.header('Authorization');

    // Check if token is missing
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
