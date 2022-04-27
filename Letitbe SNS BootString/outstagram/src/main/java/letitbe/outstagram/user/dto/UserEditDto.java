package letitbe.outstagram.user.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class UserEditDto {
    private Long id;
    private String password;
    private String userName;
    private String userEmail;
    private String phone;
    private String address;
    private String userImg;
    @Builder

    public UserEditDto(Long id, String password, String userName, String userEmail, String phone, String address, String userImg) {
        this.id = id;
        this.password = password;
        this.userName = userName;
        this.userEmail = userEmail;
        this.phone = phone;
        this.address = address;
        this.userImg = userImg;
    }
}
