var database = require("../database/config");

function registrarResultado(resultado) {
  console.log(resultado);
  var instrucao = `
        INSERT INTO resultado (resultado) VALUES ('${resultado}');
    `;

  console.log("Executando a instrução SQL: \n " + instrucao);
  return database.executar(instrucao);
}

function obterResultadoPeloId(idUsuario) {
  var instrucao = `
    SELECT res.resultado 
    FROM usuario AS usu
    INNER JOIN quiz 
    ON usu.fkQuiz = quiz.idQuiz
    INNER JOIN resultado as res
    ON res.idResultado = quiz.fkResultado
    WHERE usu.idUsuario = ${idUsuario};
    `;
  return database.executar(instrucao);
}

function obterResultadoMaisComun() {
  var instrucao = `
    SELECT resultado, COUNT(*) AS count
    FROM resultado
    GROUP BY resultado
    ORDER BY count DESC
    LIMIT 1;
  `;
  return database.executar(instrucao);
}

function obterResultadosPerguntas() {
  var instrucao = `
    SELECT pergunta, COUNT(*) AS count_pergunta
    FROM (
      SELECT pergunta1 AS pergunta FROM quiz
      UNION ALL
      SELECT pergunta2 AS pergunta FROM quiz
      UNION ALL
      SELECT pergunta3 AS pergunta FROM quiz
      UNION ALL
      SELECT pergunta4 AS pergunta FROM quiz
    ) AS subquery
    GROUP BY pergunta;
  `;
  return database.executar(instrucao);
}

function obterResultadosDistintos() {
  var instrucao = `
    SELECT resultado, COUNT(*) AS quantidade_resultados
    FROM resultado
    GROUP BY resultado;
  `;
  return database.executar(instrucao);
}

module.exports = {
  registrarResultado,
  obterResultadoPeloId,
  obterResultadoMaisComun,
  obterResultadosPerguntas,
  obterResultadosDistintos
};
