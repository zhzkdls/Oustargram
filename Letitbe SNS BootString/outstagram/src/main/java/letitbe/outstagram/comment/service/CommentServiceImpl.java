package letitbe.outstagram.comment.service;

import letitbe.outstagram.comment.dto.CommentDto;
import letitbe.outstagram.comment.dto.CommentEditDto;
import letitbe.outstagram.comment.model.Comment;
import letitbe.outstagram.comment.repository.CommentRepository;
import letitbe.outstagram.post.repository.PostRepository;
import letitbe.outstagram.post.service.PostService;
import letitbe.outstagram.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Slf4j
@RequiredArgsConstructor
@Service
public class CommentServiceImpl implements CommentService{


    private final CommentRepository commentRepository;
    private final UserService userService;
    private final PostRepository postRepository;

    @Override
    public Comment addComment(CommentDto commentDto) {
        log.info("Saving Post new comment to the Database. : {}",commentDto.getPostId());
        return commentRepository.save(Comment.builder()
                .commentText(commentDto.getCommentText())
                .user(userService.getUserById(commentDto.getUserId()).get())
                .post(postRepository.findById(commentDto.getPostId()).get())
                .build());
    }

    @Override
    public List<Comment> getAllComment() {
        log.info("Fetching all comment.");
        return commentRepository.findAll();
    }

    @Override
    public Optional<Comment> getComment(Long id) {
        log.info("Fetching comment id. {}", id);
        return Optional.ofNullable(commentRepository.findById(id)).get();
    }

    @Override
    public List<Comment> getAllByPostId(Long id) {
        log.info("Fetching All by Post Comment. postId {}", id);
        return commentRepository.findAllByPostId(id);
    }

    @Override
    public void delComment(Long id) {
        commentRepository.deleteById(id);
        log.info("Delete by post {}", id);
    }

    @Override
    public void editComment(CommentEditDto commentEditDto) {


            Comment comment = commentRepository.findById(commentEditDto.getId()).get();
            comment.setCommentText(commentEditDto.getCommentText());
            commentRepository.save(comment);

    }
}
