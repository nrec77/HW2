var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const Todo = require('../models/Todo')

const privateKey = process.env.JWT_PRIVATE_KEY;


router.use(function(req, res, next) {
      console.log(req.header("Authorization"))
      if (req.header("Authorization")) {
          try {
              req.payload = jwt.verify(req.header("Authorization"), privateKey, { algorithms: ['RS256'] })
              console.log(req.payload)
          } catch(error) {
              return res.status(401).json({"error": error.message});
          }
      } else {
          return res.status(401).json({"error": "Unauthorized"});
      }
      next()
  })

router.get('/', async function(req, res, next) {
    const todos = await Todo.find().where('author').equals(req.payload.id).exec()
    return res.status(200).json({"todos": todos})
});

router.get('/:todoId', async function(req, res, next) {
    
    const todo = await Todo.findOne().where('_id').equals(req.params.todoId).exec()
    
    return res.status(200).json(todo)
});

router.post('/', async function (req, res) {
  const todo = new Todo({
    "title": req.body.title,
    "description": req.body.description,
    "dateCreated": req.body.dateCreated,
    "complete": req.body.complete,
    "dateCompleted": req.body.dateCompleted,
    "author": req.payload.id
    })

    await todo.save().then( savedTodo => {
        return res.status(201).json({
            "id": savedTodo._id,
            "title": savedTodo.title,
            "description": savedTodo.description,
            "dateCreated": savedTodo.dateCreated,
            "complete": savedTodo.complete,
            "dateCompleted": savedTodo.dateCompleted,
            "author": savedTodo.author
        })
    }).catch( error => {
        return res.status(500).json({"error": error.message})
    });
})

router.delete('/delete', async function(req, res, next) {
    
    const todo = await Todo.findOneAndDelete().where({'author': req.payload.id, 'title': req.body.title, 'description': req.body.description}).exec()
    
    return res.status(200).json(todo)
});

router.patch('/toggle', async function(req, res, next) { 

    const filter = { author: req.payload.id, title: req.body.title, description: req.body.description }
    const update1 = {complete: req.body.completed }
    const update2 = {dateCompleted: req.body.dateCompleted }

    let todo = await Todo.findOneAndUpdate(filter, update1).exec()
    todo = await Todo.findOneAndUpdate(filter, update2).exec()
    
    return res.status(200).json(todo)
});


module.exports = router;
