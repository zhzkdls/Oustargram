package letitbe.outstagram;

import letitbe.outstagram.user.model.Role;
import letitbe.outstagram.user.model.User;
import letitbe.outstagram.user.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
@EnableJpaAuditing
@SpringBootApplication
public class OutstagramApplication {

	public static void main(String[] args) {
		SpringApplication.run(OutstagramApplication.class, args);
	}
	@Bean
	PasswordEncoder passwordEncoder(){
		return  new BCryptPasswordEncoder();
	}
	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {

			userService.addRole(new Role(null,"ROLE_USER"));
			userService.addRole(new Role(null,"ROLE_MANAGER"));
			userService.addRole(new Role(null,"ROLE_ADMIN"));
			userService.addRole(new Role(null,"ROLE_SUPER_ADMIN"));


			userService.addUser(User.builder()

							.password("1234")
							.userEmail("kim@gmail.com")
							.address("Busan")
							.userName("kim")
							.userImg("kim.jpg")
							.phone("010-1234-5678")
							.roles(new ArrayList<>())
					.build());

			userService.addUser(User.builder()

					.password("1234")
					.userEmail("kim@gmail.com")
					.address("Busan")
					.userName("jeon")
					.userImg("kim.jpg")
					.phone("010-1234-5678")
					.roles(new ArrayList<>())
					.build());

			userService.addRoleByUser("kim","ROLE_USER");
			userService.addRoleByUser("jeon","ROLE_ADMIN");

		};
	}
}