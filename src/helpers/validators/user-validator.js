import { required } from "./common-validator.js";

export const mutateDataValidator = (payload) => {
  const errs = [];
  errs.push(required(payload, 'username'));
  errs.push(required(payload, 'email'));
  errs.push(required(payload, 'account_number'));
  errs.push(required(payload, 'identity_number'));

  const errMessages = errs.filter((e) => e !== undefined);

  return errMessages;
};
