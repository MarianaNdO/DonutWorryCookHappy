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

CREATE TABLE usuario (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(45),
  senha VARCHAR(20),
  nome VARCHAR(45),
  sobrenome VARCHAR(45),
  fkQuiz INT,
  fkResultado INT,
  CONSTRAINT fkQuiz FOREIGN KEY (fkQuiz) REFERENCES quiz (idQuiz),
  CONSTRAINT fkResultado FOREIGN KEY (fkResultado) REFERENCES resultado (idResultado)
) AUTO_INCREMENT = 100;



ALTER TABLE quiz ADD CONSTRAINT pergunta1 CHECK (pergunta1 in('salgada', 'doce'));
ALTER TABLE quiz ADD CONSTRAINT pergunta2 CHECK (pergunta2 in('selvagens', 'domesticos'));
ALTER TABLE quiz ADD CONSTRAINT pergunta3 CHECK (pergunta3 in('restaurante', 'cafeteria'));
ALTER TABLE quiz ADD CONSTRAINT pergunta4 CHECK (pergunta4 in('sim', 'não'));

SHOW TABLES;