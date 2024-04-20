import _ from 'lodash';

export const requestAdjustment = (defaultReq, originalReq) => {
  const fixedReq = { ...defaultReq };
  Object.keys(defaultReq).forEach((key) => {
    if (originalReq.hasOwnProperty(key)) {
      if (!_.isEmpty(originalReq[key])) {
        fixedReq[key] = originalReq[key];
      }
    }
  });
  return fixedReq;
}

export const required = (body, key) => {
  if (!_.has(body, key)) {
    return `Field ${key} is required!`;
  }
  if (body[key] === '' || body[key] === null) {
    return `Field ${key} is required!`;
  }
};

export const isString = (body, key) => {
  if (_.isString(body)) {
    return `Invalid format for ${key}, should be a string of url!`;
  }
};

export const isInteger = (body, key) => {
  if (!_.isInteger(body)) {
    return `Invalid format for ${key}, should be an integer!`;
  }
};
