const monngoose = require('mongoose');

monngoose.connect('mongodb://localhost:27017/todoliste')
    .then(
        () => {
        console.log('Connected to database');
        }
    ).catch(
        () => {
            console.log('Connection failed');
        }
    );
