const express = require("express");
const router = express.Router();
const {
    getCount,
    createCount,
    updateCount } = require("../controllers/count");


router.get("/count/:id", getCount);
router.post('/count/:id', createCount)
router.put("/count/:id", updateCount);

module.exports = router;
