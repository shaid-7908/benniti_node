const mysql = require("mysql2");
const dotenv = require("dotenv");
require("dotenv").config();

// global.conn = mysql.createConnection({
//   host: 'localhost',
//   user: "root",
//   password: "",
//   database: "future_city",
//   charset: "utf8mb4",
// });
global.conn = mysql.createConnection({
  host: process.env.HOST || "localhost",
  user: "dev",
  password: process.env.PASSWORD || "Str0ngP@ssword",
  database: process.env.DATABASE || "bennit",
  charset: process.env.CHARSET,
});

let connection = async function () {
  try {
    await conn.connect();
    console.log("Connected to SQL.");
  } catch (error) {
    console.log("Error in connecting to database");
    return error;
  }
};
module.exports = connection;
