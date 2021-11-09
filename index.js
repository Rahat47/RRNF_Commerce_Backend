import express from 'express';
import mongoose from 'mongoose';

const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(5000, () => {
    console.log('Backend app listening on port 5000!')
})