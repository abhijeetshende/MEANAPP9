var express = require("express");
var router = express.Router();
var Network = require("../models/Network");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Network.find((err, networks) => {
    if (err) return next(err);
    console.log("network fetched");

    res.json(networks);
  });
});

router.get("/:_id", function (req, res, next) {
  Network.findById(req.params._id, function (err, networks) {
    if (err) return next(err);
    res.json(networks);
  });
});

router.post("/", function (req, res, next) {
  console.log(req.body);
  Network.create(req.body, (err, network) => {
    if (err) return next(err);
    console.log("network created");

    res.json(network);
  });
});


router.put("/:_id", function (req, res, next) {
  console.log(req.params);
  console.log(req.body);
  Network.findByIdAndUpdate(req.params._id, req.body, (err, mac) => {
    if (err) return next(err);
    console.log("network updated");

    res.json(mac);
  });
});

router.delete("/:_id", function (req, res, next) {
  console.log(req.params._id);
  Network.findByIdAndDelete(req.params._id, (err, network) => {
    if (err) return next(err);
    console.log("network deleted");
    res.json(network);
  });
});
module.exports = router;
