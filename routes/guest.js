const express = require("express");
const guest = require("../controller/GuestController");
const router = express.Router();

router.get("/", guest.get_guests);
router.post("/register", guest.register_guest);
router.delete("/delete", guest.delete_guest);
router.get("/lead", guest.lead_guest);
router.patch("/correct", guest.correct_guest);


module.exports = router;
