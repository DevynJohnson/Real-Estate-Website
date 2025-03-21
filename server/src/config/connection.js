import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const mongoURI = process.env.MONGO_DB_URI; // Get the MongoDB URI from the environment variable


if (!mongoURI) {
  console.error('MongoDB URI is not defined in environment variables.');
  process.exit(1); // Exit the process if the URI is missing
}

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if connection fails
  }
};

export default connectToDatabase;
