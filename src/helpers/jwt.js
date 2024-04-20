import jwt from 'jsonwebtoken';

const options = {
	expiresIn: `${process.env.JWT_LIFETIME} hour`,
	issuer: 'afifafian_be_test'
};

const jwtSign = (payload) => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, options);
    return token;
  } catch (err) {
    throw err;
  }
};

const jwtVerify = (token) => {
  try {
    const userData = jwt.verify(token, process.env.JWT_SECRET);
    return userData;
  } catch (err) {
    throw err;
  }
};

export {
  jwtSign,
  jwtVerify,
};
