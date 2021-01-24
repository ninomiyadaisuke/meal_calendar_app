const express = require("express");
const router = express.Router();
const {
	getBuylist,
	createBuyList,
	allGetBuyList,
	getBuyListByDate,
	removeBuylist,
	updateBuylist
} = require("../controllers/buyList");

router.get("/buylist/:id", getBuylist);
router.get("/buylists", allGetBuyList);
router.get('/buylists/:date', getBuyListByDate)
router.post("/buylist", createBuyList);
router.put('/buyEdit/:id', updateBuylist)
router.delete('/buylist/:id', removeBuylist)

module.exports = router;
