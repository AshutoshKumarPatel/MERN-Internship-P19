// Imports 
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRouter = require("./routes/authRouter/auth");
const createEventRouter = require("./routes/eventRouter/event");

// Creating the express app 
const app = express();

const corsOptions = {
    origin: true,
    credentials: true,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Api 
app.use('/api/auth', authRouter);
app.use('/api/event', createEventRouter);

// exporting app 
module.exports = app;