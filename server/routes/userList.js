const express = require("express");
const router = express.Router();
const {
	test,
	createUserList,
	allGetUserList,
	removeUserlist,
	incrementUser,
	decrementUser
} = require("../controllers/userList");

router.get("/users/test", test);
router.get("/users", allGetUserList);
router.post("/userlist", createUserList);
router.put('/increment/user/:id', incrementUser)
router.put('/decrement/user/:id', decrementUser)
router.delete('/user/delete/:id', removeUserlist)

module.exports = router;
