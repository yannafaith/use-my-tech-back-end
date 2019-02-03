const jwt = require('jsonwebtoken');

module.exports = {
   protected: (req, res, next) => {
      const token = req.headers;

      if (token) {
         jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
               res.status(401).json({ message: 'Invalid token' });
            } else {
               req.token = decodedToken;
               next();
            }
         });
      } else {
         res.status(401).json({ message: 'Unauthorized: No token provided' });
      }
   },
};
