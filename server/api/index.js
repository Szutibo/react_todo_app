const express = require('express');
const cors = require('cors');
const apiRouter = require('./router');
const port = 3001;
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.use('/api', apiRouter);

app.listen(port, () => console.log(`Server is running on port ${port}...`));