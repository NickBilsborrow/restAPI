const { Router } = require('express');
const {getOneUser,createUser,editUser} = require('../controllers/user.controllers');
const userRouter = Router();

userRouter.get("/users/:username", getOneUser);
userRouter.post("/users", createUser);
userRouter.put("/users", editUser);

module.exports = userRouter

