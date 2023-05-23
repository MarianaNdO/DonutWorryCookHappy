async function inserirResultadoQuiz(resultado) {
  const fetchResponse = await fetch("/resultados", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ resultado }),
  });

  return await fetchResponse.json();
}

async function inserirRespostasQuiz(respostasUsuario, fkResultado) {
  var fetchResponse = await fetch("/quiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ respostasUsuario, fkResultado }),
  });

  return await fetchResponse.json();
}

async function atualizarRespostasUsuario(idUsuario, fkResultado, fkQuiz) {
    var fetchResponse = await fetch("/usuarios/atualizar-respostas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idUsuario, fkResultado, fkQuiz }),
      });
    
      return await fetchResponse.json();
}
