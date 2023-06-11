var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.post("/", function (req, res) {
  resultadoController.salvarResultado(req, res);
});

router.get("/comum", function (req, res) {
  resultadoController.obterResultadoMaisComum(req, res);
});

router.get("/resultado/:id", function (req, res) {
  resultadoController.obterResultadoPeloIdUsuario(req, res);
});

router.get("/perguntas", function (req, res) {
  resultadoController.obterResultadosPerguntas(req, res);
});

router.get("/", function (req, res) {
  resultadoController.obterResultados(req, res);
});

module.exports = router;
