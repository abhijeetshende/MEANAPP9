var express = require("express");
var router = express.Router();
var Mac = require("../models/Mac");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Mac.find((err, macs) => {
    if (err) return next(err);
    console.log("mac fetched");

    res.json(macs);
  });
});

router.get('/:_id', function(req, res, next) {
  Mac.findById(req.params._id, function (err, macs) {
      if (err) return next(err);
      res.json(macs);
  });
});

router.post("/", function (req, res, next) {
  Mac.create(req.body, (err, mac) => {
    if (err) return next(err);
    console.log("mac created");

    res.json(mac);
  });
});

router.put("/:_id", function (req, res, next) {
  console.log(req.params);
  console.log(req.body);
  Mac.findByIdAndUpdate(req.params._id, req.body, (err, mac) => {
    if (err) return next(err);
    console.log("mac updated");

    res.json(mac);
  });
});

router.delete("/:_id", function (req, res, next) {
  console.log(req.params._id);
  Mac.findByIdAndDelete(req.params._id, (err, mac) => {
    if (err) return next(err);
    console.log("mac deleted");
    res.json(mac);
  });
});
module.exports = router;
