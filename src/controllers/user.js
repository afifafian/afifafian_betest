import { UserLogic } from '../logics/user.js';
import variables from '../helpers/variables.js';
import { jwtSign } from '../helpers/jwt.js';
import { userValidator } from '../helpers/validators/index.js';

export class UserControllers {
  static async loginUser(req, res, next) {
    try {
      const { body } = req;

      if (!body.email) throw { name: variables.errNames.customValidation, message: 'field email is required!' };

      const user = await UserLogic.getUserByEmail(body.email);

      const { emailAddress, userName, accountNumber, identityNumber } = user;

      const token = jwtSign({ emailAddress, userName, accountNumber, identityNumber });

      return res.status(200).json({
        message: "Successfully login!",
        access_token: token,
        request: { type: req.method, url: req.originalUrl }
      });
    } catch (err) {
      next(err);
    }
  }

  static async findUsers(req, res, next) {
    try {
      const { query } = req;
      const users = await UserLogic.getUsers(query);
      return res.status(200).json({
        message: "Successfully get users!",
        data: users,
        request: { type: req.method, url: req.originalUrl }
      });
    } catch (err) {
      next(err);
    }
  }

  static async findById(req, res, next) {
    try {
      const { params } = req;
      const user = await UserLogic.getUserById(params.id);
      return res.status(200).json({
        message: "Successfully get detail user!",
        data: user,
        request: { type: req.method, url: req.originalUrl }
      });
    } catch (err) {
      next(err);
    }
  }

  static async insertUser(req, res, next) {
    try {
      const { body } = req;
      const validator = userValidator.mutateDataValidator(body);
      if (validator.length) throw { name: variables.errNames.customValidation, message: validator };

      const newUser = await UserLogic.createUser(body);
  
      return res.status(201).json({
        message: "Successfully created new user!",
        data: newUser,
        request: { type: req.method, url: req.originalUrl }
      });
    } catch (err) {
      next(err);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const { body, params } = req;
      const validator = userValidator.mutateDataValidator(body);
      if (validator.length) throw { name: variables.errNames.customValidation, message: validator };

      await UserLogic.updateUser(params.id, body);

      return res.status(200).json({
        message: "Successfully update user!",
        request: { type: req.method, url: req.originalUrl }
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { params } = req;
      await UserLogic.deleteUser(params.id);
      
      return res.status(200).json({
        message: "Successfully delete user!",
        request: { type: req.method, url: req.originalUrl }
      });
    } catch (err) {
      next(err);
    }
  }
}
