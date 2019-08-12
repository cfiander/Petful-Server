const express = require('express');
const UsersService = require('./users-service');

const jsonBodyParser = express.json();
const usersRouter = express.Router();

usersRouter
  .route('/')
  .get((req, res, next) => {
    const users = UsersService.getUsers();
    if (!users) {
      return res
        .status(400)
        .json({ error: "The line is empty" });
    }
    return res.json(users);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { name } = req.body;
    const newName = { name: name }
    if (!name) {
      throw error({ message: 'You need to enter a name' })
    }
    UsersService.queueUser(newName);
    console.log(UsersService.Users.queueArray())
    return res.json(newName);
  })
  .delete((req, res, next) => {
    const users = UsersService.dequeueUser();
    if (!users) {
      return res
        .status(400)
        .json({ error: "There is no one to remove" });
    }
    return res.json(users);
  });

usersRouter
  .route('/cuttingline')
  .delete((req, res, next) => {
    const users = UsersService.cutLine();
    if (!users) {
      return res
        .status(400)
        .json({ error: "There is no one to remove" });
    }
    return res.json(users);
  });

module.exports = usersRouter;