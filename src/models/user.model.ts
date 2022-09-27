import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces/user.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findUser(username: string, passowrd: string): Promise <User | null> {
    const [result] = await this.connection.execute(`SELECT * FROM Trybesmith.Users
    WHERE username=? AND password=?`, [username, passowrd]);

    const [user] = result as User[];
    
    return user || null;
  }

  public async getUserId(username: string, passowrd: string): Promise<number | null> {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, passowrd],
    );

    const [user] = result as User[];

    return user.id || null;
  }

  public async create(user: User): Promise<number> {
    const { username, classe, level, password } = user;
    
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    return dataInserted.insertId;
  }
}