const route = require("express").Router();
const userController = require("../controllers/usersControllers");

route.put("/:id",userController.update) //update user
route.get("/:id",userController.get)//get a user, we never get all user in app
route.delete("/:id",userController.delete) //delete user
route.put("/:id/follow",userController.follow) //follow user
route.put("/:id/unfollow",userController.unFollow) //unfollow user

module.exports = route;