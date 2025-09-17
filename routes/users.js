const express = require("express");
const router = express.Router();
const {getUsers} = require("../controllers/users");

// Routes
// router.get("/", userController.getUsers);        // Get all users
// router.post("/", userController.createUser);     // Create a new user
// router.get("/:id", userController.getUserById);  // Get user by ID
// router.put("/:id", userController.updateUser);   // Update user
// router.delete("/:id", userController.deleteUser); // Delete user

router.get("/", getUsers)


module.exports = router;
