# CatchAsyncError

CatchAsyncError is a lightweight middleware for handling asynchronous errors in your Node.js applications. It simplifies error handling by allowing you to write cleaner code without repetitive try-catch blocks.

## Installation

To install the package, run:

```bash
npm install catchasyncerror

```

```js
// index.js
import express from "express";
import { catchAsyncError } from "catchasyncerror";
// ES module syntax

const app = express();
app.use(express.json());

const register = catchAsyncError(async (req, res, next) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({
      success: false,
      message: "Username is required",
    });
  }

  return res.status(201).json({
    success: true,
    username,
  });
});

app.post("/register", register);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
