-- Alteração

ALTER TABLE animal ADD COLUMN raca VARCHAR (60);

SELECT * FROM animal;

ALTER TABLE animal DROP COLUMN raca;

ALTER TABLE animal CHANGE nascimento data_nascimento DATE;

ALTER TABLE animal CHANGE data_nascimento nascimento DATE;

UPDATE animal SET nome  = "Mingau Cremoso" WHERE id = 3; 