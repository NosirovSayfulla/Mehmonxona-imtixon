const express = require("express");
const { getGuests, addGuest } = require("../controllers/guestController");

const router = express.Router();

router.get("/", getGuests);
router.post("/", addGuest);

module.exports = router;
