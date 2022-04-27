package letitbe.outstagram.user.controller;

import letitbe.outstagram.user.dto.UserEditDto;
import letitbe.outstagram.user.model.User;
import letitbe.outstagram.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class UserController {


    private final UserService userService;

    @PostMapping("/user/add")
    public User add(@RequestBody User user){
        return userService.addUser(user);
    }

    @GetMapping("/user/getAll")
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    @PutMapping("/user/edit")
    public void editUser(@RequestBody UserEditDto userEditDto) {
        userService.editUser(userEditDto);
    }

    @DeleteMapping("/user/del/{id}")
    public void delUser(@PathVariable Long id) {
        userService.delUser(id);
    }

}
