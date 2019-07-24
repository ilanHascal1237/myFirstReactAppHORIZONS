const express = require("express");
const router = express.Router();
const TodoItem = require("../models/TodoItem");

router.post("/add", (req, res) => {
  const testTodo = new TodoItem({
    task: req.body.taskText
  });
  testTodo
    .save()
    .then(response => {
      res.send(response);
    })
    .then(err => {
      res.send(err);
    });
});

router.get("/all", (req, res) => {
  TodoItem.find({}, (err, todo) => {
    console.log(todo);
    if (err) {
      return res.json({ success: false });
    }
    res.json({
      success: true,
      todos: todo
    });
  });
});

router.delete("/remove/:id", (req, res) => {
  TodoItem.findByIdAndRemove(req.params.id, err => {
    if (err) {
      console.log("there was an error removing");
      res.send("Failure");
    } else {
      console.log("SUCCESSFULLY REMOVED");
      res.send("Success");
    }
  });
});

module.exports = router;

//// HOW does areact component know when a function is called
//////// \\\\\\\\\\\
//basic needs to starting a react app
