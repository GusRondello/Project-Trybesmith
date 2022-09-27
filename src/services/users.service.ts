import jwt from 'jsonwebtoken';
import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UsersModel from '../models/user.model';

export default class UserSevice {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async findUser(username: string, password: string): Promise<string | null> {
    const result = await this.model.findUser(username, password);

    if (result) {
      const token = jwt.sign({ username, password }, '123456');
      return token;
    }
    return null;
  }

  public async create(user: User): Promise<string> {
    const { username, password } = user;
    await this.model.create(user);

    const token = jwt.sign({ username, password }, '123456');
    return token;
  }
}