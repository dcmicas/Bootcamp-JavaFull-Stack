-- Inserir dados na tabela
-- INSERT INTO 

INSERT INTO animal (nome, especie, nascimento)
	VALUES ("Otto", "Gato", "2021-03-04");

INSERT INTO animal (nome, especie, nascimento)
	VALUES ("Nina", "Cachorro", "2011-04-23");

SELECT * FROM animal;

-- WHERE => Especificar qual (is) registros queremos

SELECT nome,especie FROM animal WHERE nome = "Totó";

SELECT * FROM animal WHERE nascimento > "2020-01-01";




