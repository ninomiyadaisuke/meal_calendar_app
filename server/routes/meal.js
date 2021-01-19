const express = require("express");
const router = express.Router();

router.get("/meals/test", (req, res) => {
	res.json({
		testMessage: "カレンダー担当は二ノ宮さんです。",
	});
});

module.exports = router;
