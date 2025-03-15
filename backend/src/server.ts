import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import { HttpError } from './helpers/HttpError';
import recipeRoutes from './routes/recipeRoutes';

type Request = express.Request;
type Response = express.Response;

dotenv.config();

const PORT = process.env.PORT;

const app: express.Application = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/recipes', recipeRoutes);

app.use((_: Request, res: Response) => {
  res.status(404).json({
    message: 'Route not found',
  });
});

app.use((err: HttpError, req: Request, res: Response) => {
  const {
    status = 500,
    message = 'Server error',
  }: { status?: number; message?: string } = err;
  res.status(status).json({ message });
});

app.listen(PORT ? parseInt(PORT) : 3001, () => {
  console.log(`Server running. Use our API on port: ${PORT || 3001}`);
});
