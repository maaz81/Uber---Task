const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const seedAdmin = require('./config/seedAdmin');
const rideRoutes = require('./routes/rideRoutes');
const authRoutes = require('./routes/authRoutes');
const { PORT } = require('./config/env');
const cookieParser = require('cookie-parser');

dotenv.config();
connectDB();
seedAdmin();

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173', 
    credentials: true
  })
);



app.use('/api/rides', rideRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT,() => console.log(`Server running on port ${PORT}`));
