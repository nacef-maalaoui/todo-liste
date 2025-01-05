const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.post('/add', (req, res) => {
    let data = req.body;
    let todo = new Todo(data);
    todo.save()
        .then(
            (result) => {
                res.send(result);
            }
    )
        .catch(
            (err) => {
                res.send(err);
            }
        );
});

router.get('/liste', (req, res) => {
    Todo.find()
        .then(
            (result) => {
                res.send(result);
            }
        )
        .catch(
            (err) => {
                res.send(err);
            }
        );
} );

router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    Todo.findByIdAndDelete({_id : id})
        .then(
            (result) => {
                res.send(result);
            }
        )
        .catch(
            (err) => {
                res.send(err);
            }
        );
});




module.exports = router;