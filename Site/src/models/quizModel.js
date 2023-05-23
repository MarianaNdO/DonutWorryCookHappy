var database = require('../database/config');

function registrarRespostasQuiz(resultados, fkResultado) {
    console.log(resultados, fkResultado);
    var instrucao = `
        INSERT INTO quiz (pergunta1, pergunta2, pergunta3, pergunta4, fkResultado)
        VALUES ('${resultados.pergunta1}', '${resultados.pergunta2}', '${resultados.pergunta3}', '${resultados.pergunta4}', '${fkResultado}');
    `;

    console.log("Executando a instrução SQL: \n " + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registrarRespostasQuiz
}