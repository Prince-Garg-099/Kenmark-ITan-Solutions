const express = require('express');
const router = express.Router();
const Task = require('../Models/Task');

// Create a new task
router.post('/task', (req, res) => {
  var { description, dueDate, userId } = req.body;
  //console.log(req.body);

  Task.create({ description, dueDate, userId })
    .then((task) => {
      res.json({ message: 'Task created successfully', task });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Failed to create task' });
    });
});

// Get all tasks for the authenticated user
router.post('/tasks', (req, res) => {
  const userId = req.body.userId;

  Task.findAll({ where: { userId: userId } })
    .then((tasks) => {
      // console.log(tasks);
      res.json({ tasks });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Failed to fetch tasks' });
    });
});

// Update a task
router.put('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;

  Task.findByPk(taskId)
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }

      task.status = true;

      return task.save();
    })
    .then((updatedTask) => {
      res.json({ message: 'Task updated successfully', task: updatedTask });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Failed to update task' });
    });
});

// Delete a task
router.delete('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  //console.log(taskId);
  Task.destroy({ where: { id: taskId } })
    .then(() => {
      res.json({ message: 'Task deleted successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Failed to delete task' });
    });
});

module.exports = router;
