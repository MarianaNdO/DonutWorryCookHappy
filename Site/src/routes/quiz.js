var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/", function (req, res) {
  quizController.salvarResultados(req, res);
});

module.exports = router;
