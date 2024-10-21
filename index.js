const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config()

// Connect to mongoose
const dbUrl = process.env.MONGODB_URL

mongoose.connect(dbUrl) 
.then(() => {
    console.log("Connected to Mongodb");
    const app = express();
    const port = 5000;

    // connect routers
    app.use('/api',postRoutes);
    app.use('/api',userRoutes);

    app.listen(5000, () => {
        console.log(`Server has started http://localhost:5000`);
    });

})
.catch((err) => {
    console.log("Failed to Connect to Mongodb", err);
});