package letitbe.outstagram.commentList.repository;

import letitbe.outstagram.commentList.model.CommentList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentListRepository extends JpaRepository<CommentList, Long> {
}
