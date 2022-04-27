package letitbe.outstagram.user.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class UserDto {


    private String password;
    private String userName;
    private String userEmail;
    private String phone;
    private String address;
    private String userImg;



    @Builder

    public UserDto(String password, String userName, String userEmail, String phone, String address, String userImg) {
        this.password = password;
        this.userName = userName;
        this.userEmail = userEmail;
        this.phone = phone;
        this.address = address;
        this.userImg = userImg;
    }
}
