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

function obterResultadoPeloIdUsuario(req, res) {
  const idUsuario = req.params.id;
  resultadoModel
    .obterResultadoPeloId(idUsuario)
    .then((resposta) => {
      res.status(200).json(resposta);
    })
    .catch((err) => console.log(`Não foi possivel salvar o resultado: ${err}`));
}

function obterResultadoMaisComum(req, res) {
  resultadoModel
    .obterResultadoMaisComun()
    .then((resposta) => {
      res.status(200).json(resposta);
    })
    .catch((err) => console.log(`Não foi possivel salvar o resultado: ${err}`));
}

function obterResultadosPerguntas(req, res) {
  resultadoModel
    .obterResultadosPerguntas()
    .then((resposta) => {
      res.status(200).json(resposta);
    })
    .catch((err) => console.log(`Não foi possivel salvar o resultado: ${err}`));
}

function obterResultados(req, res) {
  resultadoModel
    .obterResultadosDistintos()
    .then((resposta) => {
      res.status(200).json(resposta);
    })
    .catch((err) => console.log(`Não foi possivel salvar o resultado: ${err}`));
}

module.exports = {
  salvarResultado,
  obterResultadoPeloIdUsuario,
  obterResultadoMaisComum,
  obterResultadosPerguntas,
  obterResultados,
};
