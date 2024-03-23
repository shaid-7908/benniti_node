// Import required modules
const express = require("express");
const userRoutes = require("./routes/User/userRoutes");
// Create an instance of Express
const app = express();
const port = 3000; // Port number, you can change it as per your requirement

const connection = require("./dbconnection");
connection();
// Define routes
app.use('/api/users',userRoutes);
app.get("/", (req, res) => {
  res.json({'message':'hello world'}); // Sending a simple response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
