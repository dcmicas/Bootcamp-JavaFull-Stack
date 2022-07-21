package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.User;
import com.soulcode.Servicos.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> listar(){
        return userRepository.findAll();
    }

    public User cadastrar(User user){
        return userRepository.save(user);
    }

    @Cacheable("userCache")
    public List <User> listarTodosUsers(){
        return userRepository.findAll();
    }
    @Cacheable (value = "userCache", key = "#idUser")
    public User mostrarUmUser(Integer idUser){
        Optional<User> user = userRepository.findById(idUser);
        return user.orElseThrow();
    }
    @CachePut(value = "userCache", key = "#user.idUser")
    public User inserirUser(User user){
        user.setId(null);
        return userRepository.save(user);
    }
    @CachePut(value = "userCache", key = "#user.idUser")
    public User editarUser(User user){
        mostrarUmUser(user.getId());
        return userRepository.save(user);
    }
    @CacheEvict(value = "userCache", key = "#idUser", allEntries = true)
    public void excluirUser(Integer idUser){
        mostrarUmUser(idUser);
        userRepository.deleteById(idUser);
    }
}
