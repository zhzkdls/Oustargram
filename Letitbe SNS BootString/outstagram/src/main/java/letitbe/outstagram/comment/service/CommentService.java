package letitbe.outstagram.comment.service;

import letitbe.outstagram.comment.dto.CommentDto;
import letitbe.outstagram.comment.dto.CommentEditDto;
import letitbe.outstagram.comment.model.Comment;

import java.util.List;
import java.util.Optional;

public interface CommentService {

    Comment addComment(CommentDto commentDto);
    List<Comment> getAllComment();
    List<Comment> getAllByPostId(Long id);
    Optional<Comment> getComment(Long id);
    void editComment(CommentEditDto commentEditDto);
    void delComment(Long id);

}
