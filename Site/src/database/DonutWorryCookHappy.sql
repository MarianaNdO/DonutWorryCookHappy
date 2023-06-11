CREATE DATABASE IF NOT EXISTS donutworrycookhappy;
USE donutworrycookhappy;

CREATE TABLE resultado (
  idResultado INT PRIMARY KEY AUTO_INCREMENT,
  resultado VARCHAR(45)
);

CREATE TABLE quiz (
  idQuiz INT PRIMARY KEY AUTO_INCREMENT,
  pergunta1 VARCHAR(45),
  pergunta2 VARCHAR(45),
  pergunta3 VARCHAR(45),
  pergunta4 VARCHAR(45),
  fkResultado INT,
  FOREIGN KEY (fkResultado) REFERENCES resultado (idResultado)
);

CREATE TABLE cadastro (
idCadastro INT PRIMARY KEY auto_increment, 
email VARCHAR (30),
senha VARCHAR (45)
);

CREATE TABLE usuario (
  idUsuario INT,
  nome VARCHAR(45),
  sobrenome VARCHAR(45),
  fkQuiz INT,
  fkResultado INT,
  fkCadastro INT,
  PRIMARY KEY (idUsuario, fkCadastro),
  CONSTRAINT fkCadastro FOREIGN KEY (fkCadastro) references cadastro(idCadastro),
  CONSTRAINT fkQuiz FOREIGN KEY (fkQuiz) REFERENCES quiz (idQuiz),
  CONSTRAINT fkResultado FOREIGN KEY (fkResultado) REFERENCES resultado (idResultado)
);





ALTER TABLE quiz ADD CONSTRAINT pergunta1 CHECK (pergunta1 in('salgada', 'doce'));
ALTER TABLE quiz ADD CONSTRAINT pergunta2 CHECK (pergunta2 in('selvagens', 'domesticos'));
ALTER TABLE quiz ADD CONSTRAINT pergunta3 CHECK (pergunta3 in('restaurante', 'cafeteria'));
ALTER TABLE quiz ADD CONSTRAINT pergunta4 CHECK (pergunta4 in('sim', 'não'));

SHOW TABLES;

desc resultado;
select * from resultado;

SELECT * FROM quiz;

-- select para mostrar o resultado do usuario

-- select card1 (a maioria dos usuarios) 
SELECT resultado, COUNT(*) AS count
FROM resultado
GROUP BY resultado
ORDER BY count DESC
LIMIT 1;

select * from resultado;

SELECT count(pergunta1) FROM quiz WHERE pergunta1 = 'salgada';

-- select pizza (distribuição dos resultados)
SELECT resultado, COUNT(*) AS count_pergunta
FROM (
  SELECT resultado AS resultado1 FROM resultado WHERE resultado1 = 'Sete Monstrinhos'
  UNION ALL
SELECT resultado AS resultado2 FROM resultado WHERE resultado2 = 'Croiassant-gosta'
  UNION ALL
SELECT resultado AS resultado3 FROM resultado WHERE resultado3 = 'Nequinha'
  UNION ALL
SELECT resultado AS resultado4 FROM resultado WHERE resultado4 = 'Ursinho Gordurento'
  UNION ALL
SELECT resultado AS resultado5 FROM resultado WHERE resultado5 = 'Coelho bombado'
) AS subquery
GROUP BY quiz;

-- select das colunas, respostas

SELECT resultado.resultado FROM usuario AS usu
INNER JOIN quiz ON usu.fkQuiz = quiz.idQuiz
INNER JOIN resultado ON resultado.idResultado = quiz.fkResultado
WHERE usu.idUsuario = 10;

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

SELECT resultado, COUNT(*) AS quantidade_resultados
FROM resultado
GROUP BY resultado;