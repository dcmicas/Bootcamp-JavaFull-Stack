package com.soulcode.Servicos.Models;

import javax.persistence.*;

@Entity
public class Funcionario {

    @Id // mostra q Id será a chave
    @GeneratedValue(strategy = GenerationType.IDENTITY) // diz q ele é autoincremento (gera o Id para o funbcionário)
    private Integer idFuncionario;

    @Column(nullable = false, length = 100) // indica que faz parte daq coluna, diz q n pode ser nulo e o número máximo de caracteres é 100
    private String nome;

    @Column(nullable = false, length = 100, unique = true) // unique diz q n pode existir dois funcionarios com o mesmo email
    private String email;

    @Column(nullable = true) // pode-se cadastrar o funcionário sem foto (por isso true)
    private String foto;


    public Integer getIdFuncionario() {
        return idFuncionario;
    }

    public void setIdFuncionario(Integer idFuncionario) {
        this.idFuncionario = idFuncionario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }
}
