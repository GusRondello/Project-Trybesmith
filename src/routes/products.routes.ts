import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import validateProduct from '../middlewares/product.middleware';

const productRouter = Router();

const productController = new ProductController();

productRouter.get('/', productController.getAll);
productRouter.post('/', validateProduct, productController.create);

export default productRouter;