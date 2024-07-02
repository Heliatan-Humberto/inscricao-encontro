import mysql from "mysql"

export const db = mysql.createConnection({
    host: "MYSQLHOST",
    user: "root",
    password: "rajxgfKIRAcNxQHGnYyRZFynIqnyMWiz",
    database: "railway"
});