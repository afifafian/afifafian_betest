import { UserRepository } from '../repositories/user-repository.js';
import variables from '../helpers/variables.js';

export class UserLogic {
  static async getUsers(filter) {
    try {
      const result = UserRepository.findUsers(filter);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async getUserById(id) {
    try {
      const user = await UserRepository.findById(id);
      if (!user) throw { name: variables.errNames.customValidation, statusCode: 404, message: 'User Not Found' };
      return user;
    } catch (err) {
      throw err;
    }
  }

  static async getUserByEmail(email) {
    try {
      const user = await UserRepository.findByEmail(email);
      if (!user) throw { name: variables.errNames.customValidation, statusCode: 404, message: 'User Not Found' };
      return user;
    } catch (err) {
      throw err;
    }
  }

  static async createUser(payload) {
    try {
      const { username, email, account_number, identity_number } = payload;
      const dataInsert = {
        userName: username,
        emailAddress: email,
        accountNumber: account_number,
        identityNumber: identity_number,
      }
      const newUser = await UserRepository.createUser(dataInsert);
      return newUser;
    } catch (err) {
      throw err;
    }
  }

  static async updateUser(id, payload) {
    try {
      const { username, email, account_number, identity_number } = payload;
      const dataUpdate = {
        userName: username,
        emailAddress: email,
        accountNumber: account_number,
        identityNumber: identity_number,
      }
      const updatedUser = await UserRepository.updateUser(id, dataUpdate);
      return updatedUser;
    } catch (err) {
      throw err;
    }
  }

  static async deleteUser(id) {
    try {
      const deletedUser = await UserRepository.deleteUser(id);
      return deletedUser;
    } catch (err) {
      throw err;
    }
  }
}
