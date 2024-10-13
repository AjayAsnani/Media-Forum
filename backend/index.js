const express = require('express');
const cors = require('cors'); // Import cors
const connectDB = require('./config/db'); // Ensure you have the correct path for your db connection
const userRoutes = require('./routes/userRoutes');
require('dotenv').config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB();

// Enable CORS for all routes with specific origin
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests only from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
  credentials: true, // Include credentials if necessary
}));

// Handle preflight requests for all routes
app.options('*', cors()); // Add this line before routes

// Middleware to parse JSON
app.use(express.json());

// Use the user routes
app.use('/api/users', userRoutes); // Ensure the path is correct

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define port
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
