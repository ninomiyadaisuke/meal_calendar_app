const express = require("express");
const router = express.Router();
const {
	test,
	createBuyList,
	allGetBuyList,
} = require("../controllers/buyList");

router.get("/buys/test", test);
router.get("/buylists", allGetBuyList);
router.post("/buylist", createBuyList);

module.exports = router;
