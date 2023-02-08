import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost:27017/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
