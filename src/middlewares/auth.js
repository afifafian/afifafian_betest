import { jwtVerify } from '../helpers/jwt.js';

const authentication = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwtVerify(token);
    req.userData = decoded;
    next()
  } catch (err) {
    throw err;
  }
};

export {
  authentication,
};
