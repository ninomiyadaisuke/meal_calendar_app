const express = require("express");
const router = express.Router();

router.get("/users/test", (req, res) => {
	res.json({
		testMessage: "担当は山本さんです。",
	});
});

module.exports = router;
