var express = require("express");
var router = express.Router();

var resultadoController = require('../controllers/resultadoController');

router.post('/', function(req, res) {
    resultadoController.salvarResultado(req, res);
});

module.exports = router;