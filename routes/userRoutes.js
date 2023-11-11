const express = require("express");
const cors = require('cors')
const userController = require("../controllers/UserController");
const ensureAdmin = require("../middlewares/ensureAdmin");

const ensureAuth = require("../middlewares/ensureAuth");0

const router = express.Router();

// login
router.post("/login", userController.Login);

// user routes
router.post("/createUser", userController.CreateUser);
router.patch("/editPassword", userController.EditPassword);
router.patch("/editUser/:id", ensureAuth, userController.EditUser);
router.patch(
  "/deleteUser/:id",
  ensureAuth,
  ensureAdmin,
  userController.DeleteUser
);
router.get("/getUser/", ensureAuth, userController.GetAllUsers);
router.get("/getUser/:id", ensureAuth, userController.GetUser);
router.get(
  "/activity/:id",
  ensureAuth,
  ensureAdmin,
  userController.GetUserActivity
);

module.exports = router;
