const express = require('express');
const { check } = require('express-validator');
const User = require('../models/User'); // Adjust path as necessary
const router = express.Router();
const userController = require('../controllers/userController'); // Import your user controller

// POST route to create a new user with validation
router.post(
  '/',
  [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('email', 'Email must be valid').isEmail(),
    check('password', 'Password must be 6 characters or longer').isLength({ min: 6 }),
    check('pincode', 'Pincode must be a valid 6-digit code').isLength({ min: 6, max: 6 }),
    check('phone', 'Phone number must be valid').isMobilePhone(),
  ],
  userController.createUser // Call the controller method to create the user
);

// GET route to fetch all users
router.get('/', async (req, res) => {
  try {
      const users = await User.find(); // Fetch all users from the database
      console.log('Users fetched:', users); // Log the fetched users
      res.json(users); // Return the users as JSON
  } catch (err) {
      console.error('Error fetching users:', err); // Log the error
      res.status(500).json({ message: err.message }); // Handle errors
  }
});

module.exports = router;
