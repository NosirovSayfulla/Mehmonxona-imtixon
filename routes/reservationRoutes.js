const express = require("express");
const { getReservations, addReservation } = require("../controllers/reservationController");

const router = express.Router();

router.get("/", getReservations);
router.post("/", addReservation);

module.exports = router;
