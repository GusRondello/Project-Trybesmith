import express from 'express';
import productRouter from './routes/products.routes';
import userRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(userRouter);

export default app;
