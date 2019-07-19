const express = require("express");
const router = express.Router();

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
