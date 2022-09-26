import { Router } from 'express';
import OrderController from '../controllers/orders.controller';

const orderRouter = Router();

const ordersController = new OrderController();

orderRouter.get('/orders', ordersController.getAll);

export default orderRouter;