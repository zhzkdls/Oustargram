package letitbe.outstagram.post.service;

import letitbe.outstagram.post.dto.PostDto;
import letitbe.outstagram.post.dto.PostEditDto;
import letitbe.outstagram.post.model.Post;
import letitbe.outstagram.post.dto.PostOutDto;

import java.util.List;

public interface PostService {
    int addPost(PostDto postDto);
    List<Post> getAllPost();
    PostOutDto getPostById(Long id);
    List<Post> getPostByAuthorId(Long id);
    void delPost(Long id);
    void delAllPostByUserId(Long id);
    void editPost(PostEditDto postEditDto);
}
