package letitbe.outstagram.comment.repository;

import letitbe.outstagram.comment.model.Comment;
import letitbe.outstagram.post.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByPostId(Long postId);
    List<Comment> findAllByUserId(Long userId);
}
