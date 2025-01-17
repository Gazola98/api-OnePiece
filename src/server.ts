import express from "express";

const startServer = async () => {
  try {
    const app = express();
    app.use(express.json());
    const port = 3000;

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to start server", error);
    process.exit(1);
  }
};

startServer();
