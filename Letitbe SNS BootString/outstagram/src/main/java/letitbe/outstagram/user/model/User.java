package letitbe.outstagram.user.model;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Data
@NoArgsConstructor
@Entity
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String password;
    private String userName;
    private String userEmail;
    private String phone;
    private String address;
    private String userImg;


    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Role> roles = new ArrayList<>();


    @Builder

    public User(Long id, String password, String userName, String userEmail, String phone, String address, String userImg, Collection<Role> roles) {
        this.id = id;
        this.password = password;
        this.userName = userName;
        this.userEmail = userEmail;
        this.phone = phone;
        this.address = address;
        this.userImg = userImg;
        this.roles = roles;
    }
}
