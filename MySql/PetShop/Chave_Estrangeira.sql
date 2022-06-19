-- Chaves estrangeiras para estabelecer o relacionamento entre duas tabelas 
-- Vamos criar a tabela de  clientes que serão os "donos" dos seus respectivos animais

CREATE TABLE cliente(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    animal_id INT NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES animal(id)
);

SELECT * FROM cliente;

INSERT INTO cliente(nome, email, animal_id)
	VALUES("Marta", "marta@gmail.com",4);
    
