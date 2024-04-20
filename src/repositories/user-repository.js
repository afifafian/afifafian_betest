import { User } from '../models/index.js';

export class UserRepository {
  static async findUsers(filter) {
    try {
      const whereAccountNumber = {};
      const whereIdentityNumber = {};
      if (filter.account_number) whereAccountNumber['accountNumber'] = filter.account_number;
      if (filter.identity_number) whereIdentityNumber['identityNumber'] = filter.identity_number;
  
      const users = await User.find({ $or: [whereAccountNumber, whereIdentityNumber] }, { __v: 0 });
      return users;
    } catch (err) {
      throw err;
    }
  }

  static async findById(id) {
    try {
      const user = await User.findOne({ _id: id });
      return user;
    } catch (err) {
      throw err;
    }
  }

  static async findByEmail(email) {
    try {
      const user = await User.findOne({ emailAddress: email });
      return user;
    } catch (err) {
      throw err;
    }
  }

  static async createUser(payload) {
    try {
      const newUser = await User.create(payload);
      return newUser;
    } catch (err) {
      throw err;
    }
  }

  static async updateUser(id, dataUpdate) {
    try {
      const updatedUser = await User.findByIdAndUpdate(id, dataUpdate);
      return updatedUser;
    } catch (err) {
      throw err;
    }
  }

  static async deleteUser(id) {
    try {
      const deletedUser = await User.deleteOne({ _id: id });
      return deletedUser;
    } catch (err) {
      throw err;
    }
  }
}
