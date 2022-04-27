package letitbe.outstagram.likes.service;

import letitbe.outstagram.likes.dto.LikeDto;
import letitbe.outstagram.likes.model.Likes;
import letitbe.outstagram.likes.repository.LikeRepository;
import letitbe.outstagram.post.repository.PostRepository;
import letitbe.outstagram.post.service.PostService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class LikeServiceImpl implements LikeService{

    private final LikeRepository likeRepository;
    private final PostRepository postRepository;


    @Override
    public Likes addLike(LikeDto likeDto) {
        return likeRepository.save(Likes.builder()
                        .post(postRepository.findById(likeDto.getPostId()).get())
                        .likeCount(likeDto.getLikeCount())
                .build());
    }

    @Override
    public List<Likes> getAllLike() {
        return likeRepository.findAll();
    }

    @Override
    public Optional<Likes> getLikes(Long id) {
        return Optional.ofNullable(likeRepository.findById(id).get());
    }
}
