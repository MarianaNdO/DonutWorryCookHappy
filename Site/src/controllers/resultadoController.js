var resultadoModel = require("../models/resultadoModel");

function salvarResultado(req, res) {
  const resultado = req.body.resultado;
  resultadoModel
    .registrarResultado(resultado)
    .then(function (resultado) {
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      console.log(`Não foi possivel salvar o resultado: ${erro}`);
    });
}

module.exports = {
  salvarResultado,
};
