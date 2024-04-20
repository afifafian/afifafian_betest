import variables from '../helpers/variables.js';

export const errorHandler = (err, req, res, next) => {
  // console.log(err.name, err);
  switch (err.name) {
    case variables.errNames.customValidation:
      return res.status(err.statusCode || 400).json({
        message: err.message, request: { type: req.method, url: req.originalUrl }
      });
    case variables.errNames.jsonWebToken.jwtMalformed:
      return res.status(401).json({
        message: 'Authentication Failed', request: { type: req.method, url: req.originalUrl }
      });
    case variables.errNames.jsonWebToken.tokenExpired:
      return res.status(401).json({
        message: 'Your session has ended', request: { type: req.method, url: req.originalUrl }
      });
  
    default:
      return res.status(500).json({
        message: `Internal Server Error: ${err}`
      });
  }
};
