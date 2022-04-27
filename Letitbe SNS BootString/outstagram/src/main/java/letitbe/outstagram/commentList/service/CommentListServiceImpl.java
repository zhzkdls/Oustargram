package letitbe.outstagram.commentList.service;

import letitbe.outstagram.commentList.model.CommentList;
import letitbe.outstagram.commentList.repository.CommentListRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Slf4j
@RequiredArgsConstructor
@Service
public class CommentListServiceImpl implements CommentListService {

    private final CommentListRepository commentListRepository;

    @Override
    public CommentList addCommentList(CommentList commentList) {
      log.info("Saving new commentList to the Database. : {}", commentList.getComment());
        return commentListRepository.save(commentList);
    }

    @Override
    public List<CommentList> getAllCommentList() {
        log.info("Fetching all CommentList.");
        return commentListRepository.findAll();
    }

    @Override
    public Optional<CommentList> getCommentList(Long id) {
        log.info("Fetcing CommnetList. {}", id);
        return Optional.ofNullable(commentListRepository.findById(id)).get();
    }
}
