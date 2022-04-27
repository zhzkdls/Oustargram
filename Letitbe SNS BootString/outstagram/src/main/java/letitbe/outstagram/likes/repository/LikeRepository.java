package letitbe.outstagram.likes.repository;

import letitbe.outstagram.likes.model.Likes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<Likes, Long> {
}
