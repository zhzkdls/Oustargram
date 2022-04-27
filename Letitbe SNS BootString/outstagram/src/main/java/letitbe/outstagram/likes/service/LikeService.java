package letitbe.outstagram.likes.service;



import letitbe.outstagram.likes.dto.LikeDto;
import letitbe.outstagram.likes.model.Likes;

import java.util.List;
import java.util.Optional;

public interface LikeService {
    Likes addLike(LikeDto likeDto);
    List<Likes> getAllLike();
    Optional<Likes> getLikes(Long id);
}
