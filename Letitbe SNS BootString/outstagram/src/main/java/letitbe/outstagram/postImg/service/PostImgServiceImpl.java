package letitbe.outstagram.postImg.service;

import letitbe.outstagram.postImg.model.PostImg;
import letitbe.outstagram.postImg.repository.PostImgRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Slf4j
@RequiredArgsConstructor
@Service
public class PostImgServiceImpl implements PostImgService{


    private final PostImgRepository postImgRepository;

    @Override
    public PostImg addPostImg(PostImg postImg) {
        log.info("Saving new postImg to the Database : {}", postImg.getId());
        return postImgRepository.save(postImg);
    }

    @Override
    public List<PostImg> getAllPostImg() {
        return postImgRepository.findAll();
    }

    @Override
    public Optional<PostImg> getPostImg(Long id) {
        return Optional.ofNullable(postImgRepository.findById(id)).get();
    }
}
