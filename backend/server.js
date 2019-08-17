import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello World 3252'));
app.listen(4000, () => console.log('Express Server running on port 4000'));
