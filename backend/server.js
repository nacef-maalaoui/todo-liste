const express = require('express');

require('./config/connect');

const todoRouter = require('./router/todo');

const app = express();
app.use(express.json());

app.use('/todo', todoRouter);



app.listen(
    3000, 
    () => {console.log('Server is running' )}
);