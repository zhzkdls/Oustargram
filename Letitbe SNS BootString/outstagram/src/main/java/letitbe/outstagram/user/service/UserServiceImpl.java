package letitbe.outstagram.user.service;

import letitbe.outstagram.user.dto.UserDto;
import letitbe.outstagram.user.dto.UserEditDto;
import letitbe.outstagram.user.model.Role;
import letitbe.outstagram.user.model.User;
import letitbe.outstagram.user.repository.RoleRepository;
import letitbe.outstagram.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Transactional
@Service
public class UserServiceImpl implements UserService, UserDetailsService{


    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    @Override
    public User addUser(User user) {
        log.info("Saving new user to the database. : {}",user.getUserName());

        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUser() {
        log.info("Fetching all users.");
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return Optional.ofNullable(userRepository.findById(id)).get();
    }



    @Override
    public Role addRole(Role role) {
        log.info("Saving new role to the database. : {}", role.getName());
        return roleRepository.save(role);
    }

    @Override
    public void addRoleByUser(String userId, String roleName) {
        log.info("Adding role {} to user {} to the database.", roleName, userId);
        User user = userRepository.findByUserName(userId);
        Role role = roleRepository.findByName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(username);
        if (user == null) {
            log.error("User not found in the database.");
            throw new UsernameNotFoundException("User not found in the database.");
        } else {
            log.info("User found in the database. : {}", username);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        });
        return new org.springframework.security.core.userdetails.User(user.getUserName(),user.getPassword(), authorities);
    }

    @Override
    public User getUserByName(String userName) {
        log.info("Fetching user {}", userName);
        return userRepository.findByUserName(userName);

    }

    @Override
    public void editUser(UserEditDto userEditDto) {
        try {
            User.builder()
                    .id(userEditDto.getId())
                    .userEmail(userEditDto.getUserEmail())
                    .password(userEditDto.getPassword())
                    .phone(userEditDto.getPhone())
                    .userImg(userEditDto.getUserImg())
                    .userName(userEditDto.getUserName())
                    .build();
        } catch (Exception e) {
            log.info("Error : {}", e.getMessage());
        }
    }

    @Override
    public void delUser(Long id) {
        try {
            userRepository.deleteById(id);
        } catch (Exception e) {
            log.error("Error : {}", e.getMessage());
        }
    }
}
