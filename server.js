import express, { json, urlencoded } from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();

var corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

// Create MySQL connection pool
const pool = mysql.createPool({
    host: "sql.freedb.tech",
    port: 3306,
    user: "freedb_rangkayo",
    password: "?kChCZmY73yx$nM",
    database: "freedb_equiparenting",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

// simple route
app.get("/", (req, res) => {
    // Use the connection pool to execute SQL queries
    pool.query("SELECT * FROM your_table", (error, results) => {
      if (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ message: "Internal Server Error" });
      } else {
        res.json({ message: "Welcome to Equiparenting.", data: results });
      }
    });
  });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});