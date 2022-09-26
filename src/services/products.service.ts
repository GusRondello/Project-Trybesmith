import Product from '../interface/product.interface';
import connection from '../models/connection';
import ProductsModel from '../models/products.model';

export default class ProductService {
  public model: ProductsModel;
  
  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    return this.model.create(product);
  }
}