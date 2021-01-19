const express = require("express");
const router = express.Router();

router.get("/buys/test", (req, res) => {
	res.json({
		testMessage: "担当は山口くんです。",
	});
});

module.exports = router;
