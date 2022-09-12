const express = require("express");
const visitor = require("../controller/VisitorController");
const router = express.Router();

router.get("/", visitor.get_visitors);              // select(조회할 때)
router.post("/write", visitor.post_comment);        // create(새로운 insert)
router.get("/get", visitor.get_visitor);
router.patch("/edit", visitor.patch_comment);       // update(수정)
router.delete("/delete", visitor.delete_comment);   // delete(삭제할 때)


module.exports = router;

// put : insert or update