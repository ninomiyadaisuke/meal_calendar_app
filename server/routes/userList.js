const express = require("express");
const router = express.Router();
const {
	test,
	createUserList,
	allGetUserList,
} = require("../controllers/userList");

router.get("/users/test", test);
router.get("/users", allGetUserList);
router.post("/user", createUserList);

module.exports = router;
