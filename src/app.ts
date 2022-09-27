import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import loginRouter from './routes/login.routes';
import orderRouter from './routes/orders.routes';
import productRouter from './routes/products.routes';
import userRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);
app.use(errorMiddleware);

export default app;
