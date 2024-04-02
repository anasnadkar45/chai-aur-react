const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000

app.use(express.json());

const db = require('./config/database');
db.connect();

app.post('/api/v1/')