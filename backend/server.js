require('dotenv').config();
const express=require('express'), cors=require('cors');
const connectDB=require('./config/db');
const err=require('./middleware/errorHandler');

connectDB();
const app=express();
app.use(cors(), express.json());

// Static
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/citizen', require('./routes/citizenRoutes'));
app.use('/api/supervisor', require('./routes/supervisorRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/vehicle', require('./routes/vehicleRoutes'));

// Error handler
app.use(err);

const port=process.env.PORT || 5001;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
