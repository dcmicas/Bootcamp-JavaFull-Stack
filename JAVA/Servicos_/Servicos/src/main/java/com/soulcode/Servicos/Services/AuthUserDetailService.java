package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.Cliente;
import com.soulcode.Servicos.Models.User;
import com.soulcode.Servicos.Repositories.UserRepository;
import com.soulcode.Servicos.Security.AuthUserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthUserDetailService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByLogin(username); // filtro por email
        if (user.isEmpty()) { // ou use "!user.isPresent()"
            throw new UsernameNotFoundException("Usuário não encontrado");
        }
        // user.get().getStatus();
        return new AuthUserDetail(user.get().getLogin(), user.get().getPassword());
    }
    /**
     * O propósito do UserDetailService é carregar de alguma fonte de dados
     * o usuário e criar uma instância de AuthUserDetail, conhecida pelo Spring.
     */

    @Cacheable("authUserCache")
    public List <User> loadUserByUsername() {
        return userRepository.findAll();
    }

    @Cacheable (value = "authUserCache", key = "#idUser")
    public User loadUserByUsername(Integer idUser) {
        Optional<User> user = userRepository.findById(idUser);
        return user.orElseThrow();
    }
    @CachePut(value = "authUserCache", key = "#user.idUser")
    public User editarAuthUser(User user) {
        user.setIdUser(null);
        return userRepository.save(user);
    }
    @CachePut (value = "authUserCache", key = "#user.idUser")
    public User editarAuthUser(User user, Integer idUser) {
        loadUserByUsername(user.getId());
        return userRepository.save(user);
    }
    @CacheEvict(value = "authUserCache", key = "#idUser", allEntries = true)
    public void excluirAuthUser(Integer idUser) {
        loadUserByUsername(idUser);
        userRepository.deleteById(idUser);
    }
}

