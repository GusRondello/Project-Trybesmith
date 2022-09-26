import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import ProductService from '../services/products.service';

export default class ProductController {
  constructor(private ProductsService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const createProduct = await this.ProductsService.create(product);
    res.status(StatusCodes.CREATED).json(createProduct);
  };
}