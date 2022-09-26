import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const productRouter = Router();

const productController = new ProductController();

productRouter.get('/products', productController.getAll);
productRouter.post('/products', productController.create);

export default productRouter;