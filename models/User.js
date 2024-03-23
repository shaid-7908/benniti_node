// Assuming you have already imported necessary modules and set up the database connection in dbconnection.js

class User {
  constructor() {
    // Initialize User class properties or configurations here if needed
  }

  async getAllUsers() {
    try {
      const [rows, fields] = await global.conn
        .promise()
        .query("SELECT tbl_users.id FROM tbl_users");
      return rows;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }
}

module.exports = User;
