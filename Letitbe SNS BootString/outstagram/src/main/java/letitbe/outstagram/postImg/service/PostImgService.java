package letitbe.outstagram.postImg.service;

import letitbe.outstagram.postImg.model.PostImg;

import java.util.List;
import java.util.Optional;

public interface PostImgService {
    PostImg addPostImg(PostImg postImg);
    List<PostImg> getAllPostImg();
    Optional<PostImg> getPostImg(Long id);
}
