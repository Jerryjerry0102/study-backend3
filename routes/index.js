const express = require("express");
const router = express.Router();

const visitor = require("../controller/VisitorController");
router.get("/visitor", visitor.get_visitors);              // select(조회할 때)
router.post("/visitor/write", visitor.post_comment);        // create(새로운 insert)
router.get("/visitor/get", visitor.get_visitor);
router.patch("/visitor/edit", visitor.patch_comment);       // update(수정)
router.delete("/visitor/delete", visitor.delete_comment);   // delete(삭제할 때)

const guest = require("../controller/GuestController");
router.get("/guest", guest.get_guests);
router.post("/guest/register", guest.register_guest);
router.delete("/guest/delete", guest.delete_guest);
router.get("/guest/lead", guest.lead_guest);
router.patch("/guest/correct", guest.correct_guest);


module.exports = router;

// put : insert or update