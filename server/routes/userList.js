const express = require("express");
const router = express.Router();
const {
	test,
	createUserList,
	allGetUserList,
	updateUserList,
	removeUserlist
} = require("../controllers/userList");

router.get("/users/test", test);
router.get("/users", allGetUserList);
router.post("/userlist", createUserList);
router.put('/update/user/:id', updateUserList)
router.delete('/user/delete/:id', removeUserlist)

module.exports = router;
