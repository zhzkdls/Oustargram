package letitbe.outstagram.postImg.repository;

import letitbe.outstagram.postImg.model.PostImg;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostImgRepository extends JpaRepository<PostImg, Long> {
}
