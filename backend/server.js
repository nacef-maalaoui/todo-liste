const express = require('express');
const cors = require('cors');

require('./config/connect');

const todoRouter = require('./router/todo');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/todo', todoRouter);



app.listen(
    3000, 
    () => {console.log('Server is running' )}
);