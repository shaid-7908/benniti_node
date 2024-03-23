const express = require('express');
const router = express.Router();

const User = require('../../models/User');

const user = new User();

router.get("/users", async (req, res) => {
  try {
    const users = await user.getAllUsers();
    res.json(users); // Sending JSON response with the fetched users
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Sending error response if something went wrong
  }
});

module.exports =router;