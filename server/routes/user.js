const express = require("express");
const { requireAuth } = require("../middlewares/middleware");
const {
  updatePasswordController,
  getUserController,
  updateUserController,
} = require("../controllers/userController");

const router = express.Router();

module.exports = router;

router.get("/", getUserController);

router.put("/password", requireAuth, updatePasswordController);

router.put("/", requireAuth, updateUserController);
