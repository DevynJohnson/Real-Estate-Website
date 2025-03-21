import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import connectToDatabase from './config/connection.js'; // Import the connection function

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3001;

// Fix for ES module __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
connectToDatabase(); // Establish the connection

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'https://www.elisejohnsonrealtor.com/',
  credentials: true,
}));

// Serve static frontend files from the 'client' folder (for development)
app.use(express.static(path.join(__dirname, '../client')));

// Set up routes
import routes from './routes/user-routes.js';
app.use(routes);

// Fallback route for all other requests to send the React app's index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

// Start the server once the database is connected
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
