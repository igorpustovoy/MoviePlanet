
require('dotenv').config();
const { Client } = require('pg');


const dbConnData = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  };

module.exports = new Client(dbConnData);


