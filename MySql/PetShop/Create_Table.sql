-- criar tabela
-- criar a tabela de animais com os campos: nome, espécie, data de nascimento
-- os principais tipos do SQL: 
-- VARCHAR => texto
-- INT (numeros inteiros), DOUBLE (Com casas decimais)
-- DATE => datas

CREATE TABLE animal(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (50) NOT NULL UNIQUE,  
    especie VARCHAR (50),
    nascimento DATE
);

-- SELECT => é o comando que busca osa dados no database

SELECT * FROM animal;
