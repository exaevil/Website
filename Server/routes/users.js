const { getUsers } = require("../controller/users");
const express = require("express");
const router = express.Router();
router.get("/", getUsers);
module.exports = router;
