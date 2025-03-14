import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import recipeRoutes from "./routes/recipeRoutes";

// Access types from the default export
type Request = express.Request;
type Response = express.Response;
type NextFunction = express.NextFunction;

dotenv.config();

const { PORT } = process.env as { PORT?: string };

const app: express.Application = express();

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// Router
app.use("/api/recipes", recipeRoutes);

// 404 Handler
app.use((_: Request, res: Response) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const {
    status = 500,
    message = "Server error",
  }: { status?: number; message?: string } = err;
  res.status(status).json({ message });
});

// Start Server
app.listen(PORT ? parseInt(PORT) : 3001, () => {
  console.log(`Server running. Use our API on port: ${PORT || 3001}`);
});
