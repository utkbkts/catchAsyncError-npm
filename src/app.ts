import express, { Request, Response, NextFunction } from "express";
import catchAsyncError from "../src/catchAsyncError"; // Middleware'i doğru yoldan içe aktarın

const app = express();
app.use(express.json());

app.post(
  "/register",
  catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    res.status(201).json({ success: true, message: "User registered" });
  })
);

// Hata yakalama middleware'i
app.use((err: any, req: Request, res: Response) => {
  res.status(500).json({ success: false, message: err.message });
});

export default app;
