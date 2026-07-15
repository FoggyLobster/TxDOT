const database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const dataPath = path.join(__dirname, "data");

if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(dataPath);
}

const db = new Database(path.join(dataPath, "database.sqlite"));

module.exports = db;