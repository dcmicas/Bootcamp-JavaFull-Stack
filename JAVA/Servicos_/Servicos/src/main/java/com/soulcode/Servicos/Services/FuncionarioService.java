package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.Funcionario;
import com.soulcode.Servicos.Repositories.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//Quando se fala em serviços, estamos falando dos métodos do crud da tabela
@Service
public class FuncionarioService {

    // aqui se faz a injeção de dependência
    @Autowired
    FuncionarioRepository funcionarioRepository;

    //primeiro serviço na tabela de funcionários vai ser a leitura de todos os funcionarios cadastrados
    //findALL -> método do spring JPA -> busca todos os registros de uma tabela
    public List<Funcionario> mostrarTodosFuncionarios(){
        return funcionarioRepository.findAll();
    }
}