const express = require("express");
const router = express.Router();

const index = require("./../controllers/index");

router.get("/add", index.addition);
router.get("/sub", index.subtraction);
router.get("/div", index.division);
router.get("/mult", index.multiplication);

module.exports = router;
