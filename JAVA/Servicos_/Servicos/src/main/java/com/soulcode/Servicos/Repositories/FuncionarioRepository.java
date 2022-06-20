package com.soulcode.Servicos.Repositories;

import com.soulcode.Servicos.Models.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository; // lembrar de verificar se tudo foi importado

public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {
} //Cria-se a interface e extend para a super classe JpaRepository<Classe extendida>, tipo de Id>