import express from "express";
import mongoose from "mongoose";
import orderRoutes from "./interfaces/routes/orderRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27018";

app.use(express.json());
app.use("/orders", orderRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

startServer();
