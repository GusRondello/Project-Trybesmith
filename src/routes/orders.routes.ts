import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import userAuth from '../middlewares/auth.middleware';
import orderValidation from '../middlewares/order.middleware';

const orderRouter = Router();

const ordersController = new OrderController();

orderRouter.get('/', ordersController.getAll);
orderRouter.post('/', userAuth, orderValidation, ordersController.create);

export default orderRouter;