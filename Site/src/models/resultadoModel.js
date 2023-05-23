var database = require('../database/config');

function registrarResultado(resultado) {
    console.log(resultado)
    var instrucao = `
        INSERT INTO resultado (resultado) VALUES ('${resultado}');
    `;
    
    console.log("Executando a instrução SQL: \n " + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registrarResultado
}