const express = require("express");
const router = express.Router();
const TodoItem = require("../models/TodoItem");

router.get("/add", (req, res) => {
  const testTodo = new TodoItem({
    task: "learn assembly"
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
