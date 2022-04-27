package letitbe.outstagram.likeList.repository;

import letitbe.outstagram.likeList.model.LikeList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeListRepository extends JpaRepository<LikeList, Long> {
}
