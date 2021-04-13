require('dotenv').config({path: "./config.env"});
const path = require('path');
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Connect DB
connectDB();

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,'/client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
} else{
    app.get('/', (req,res) => {
        res.send("Api running");
    });
}
// Middleware
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

// Error Handler (SHould be last piece of middleware)
app.use(errorHandler);

// For herkoku deployment

// PORT for HEROKU or Localhost
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => 
console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err,promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
})