const express = require("express");
const router = express.Router();
const TodoItem = require("../models/TodoItem");

router.post("/add", (req, res) => {
  const testTodo = new TodoItem({
    task: req.body.taskText
  });
  reouter.get("/all", (req, res) => {
    TodoItem.find({}),
      (err, todo) => {
        if (err) {
          return res.json({ success: false });
        }
        res.json({
          success: true,
          todos: todos
        });
      };
  });
  testTodo
    .save()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;

//// HOW does areact component know when a function is called
//////// \\\\\\\\\\\
//basic needs to starting a react app
