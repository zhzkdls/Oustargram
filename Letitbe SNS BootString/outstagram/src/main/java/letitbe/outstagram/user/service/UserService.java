package letitbe.outstagram.user.service;


import letitbe.outstagram.user.dto.UserDto;
import letitbe.outstagram.user.dto.UserEditDto;
import letitbe.outstagram.user.model.Role;
import letitbe.outstagram.user.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User addUser(User user);

    Role addRole(Role role);
    void addRoleByUser(String userName, String roleName);
    List<User> getAllUser();
    User getUserByName(String userName);
    Optional<User> getUserById(Long id);
    void editUser(UserEditDto userEditDto);
    void delUser(Long id);



}
