var quizModel = require("../models/quizModel");

function salvarResultados(req, res) {
    const resultados = req.body.respostasUsuario;
    const fkResultado = req.body.fkResultado;
    quizModel.registrarRespostasQuiz(resultados, fkResultado).then(function (resultado) {
        res.status(200).json(resultado);
      }).catch(function (erro) {
        console.log(`Não foi possivel salvar o resultado: ${erro}`)
      });
}

module.exports = {
    salvarResultados
}