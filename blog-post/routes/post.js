var express = require("express");
var router = express.Router();
var Posts = require("../models/Post");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Posts.find((err, posts) => {
    if (err) return next(err);
    console.log("post fetched");

    res.json(posts);
  });
});

router.get('/:_id', function(req, res, next) {
  Posts.findById(req.params._id, function (err, posts) {
      if (err) return next(err);
      res.json(posts);
  });
});

router.post("/", function (req, res, next) {
  Posts.create(req.body, (err, post) => {
    if (err) return next(err);
    console.log("post created");

    res.json(post);
  });
});

router.put("/:_id", function (req, res, next) {
  Posts.findByIdAndUpdate(req.param.id, req.body, (err, post) => {
    if (err) return next(err);
    console.log("post updated");

    res.json(post);
  });
});

router.delete("/:_id", function (req, res, next) {
  console.log(req.params._id);
  Posts.findByIdAndDelete(req.params._id, (err, post) => {
    if (err) return next(err);
    console.log("post deleted");
    res.json(post);
  });
});
module.exports = router;
