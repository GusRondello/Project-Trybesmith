import { JwtPayload } from 'jsonwebtoken';
import Order from '../interfaces/order.interface';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import ProductsModel from '../models/products.model';
import UsersModel from '../models/user.model';

export default class OrderService {
  public orderModel: OrdersModel;

  public productModel: ProductsModel;

  public userModel: UsersModel;

  constructor() {
    this.orderModel = new OrdersModel(connection);
    this.productModel = new ProductsModel(connection);
    this.userModel = new UsersModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.orderModel.getAll();
    return orders;
  }

  public async create(user: JwtPayload, productsIds: number[]): Promise<Order | null> {
    const { username, password } = user;
    
    const userId = await this.userModel.getUserId(username, password);

    if (!userId) { 
      return null;
    }

    const orderId = await this.orderModel.create(userId);

    const result = Promise.all(
      productsIds.map(async (productId) => this.productModel.update(productId, orderId)),
    ).then(() => ({ userId, productsIds }));

    return result;
  }
}