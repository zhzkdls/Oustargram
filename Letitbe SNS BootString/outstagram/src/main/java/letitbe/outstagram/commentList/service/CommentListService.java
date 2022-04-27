package letitbe.outstagram.commentList.service;

import letitbe.outstagram.commentList.model.CommentList;

import java.util.List;
import java.util.Optional;

public interface CommentListService{

    CommentList addCommentList(CommentList commentList);
    List<CommentList> getAllCommentList();
    Optional<CommentList> getCommentList(Long id);

}
