package letitbe.outstagram.post.controller;

import letitbe.outstagram.comment.model.Comment;
import letitbe.outstagram.post.dto.PostDto;
import letitbe.outstagram.post.dto.PostEditDto;
import letitbe.outstagram.post.model.Post;
import letitbe.outstagram.post.dto.PostOutDto;
import letitbe.outstagram.post.service.PostService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Id;
import java.util.List;
@Slf4j
@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class PostController {


    private final PostService postService;

    @PostMapping("/post/add")
    public int add(@RequestBody PostDto postDto) {
        if(postService.addPost(postDto) == 1){
            return 1;
        }else{
            return  0;
        }

    }

    @GetMapping("/post/getAll")
    public List<Post> getAll() {
        return postService.getAllPost();
    }

    @GetMapping("/post/get/{id}")
    public PostOutDto getPost(@PathVariable Long id) {
        return postService.getPostById(id);
    }

    @GetMapping("/post/getPostByAuthorId/{id}")
    public List<Post> getPostByAuthorId(@PathVariable Long id) {
        return postService.getPostByAuthorId(id);
    }

    @DeleteMapping("/post/del/{id}")
    public void delPostById(@PathVariable Long id){
        postService.delPost(id);
    }

    @DeleteMapping("/post/delAllPostByUserId/{userId}")
    public void delAllPostByUserId(@PathVariable Long userId){
        postService.delAllPostByUserId(userId);
    }

    @PutMapping("/post/edit/{id}")
    public void edit(@PathVariable Long id, @RequestBody PostEditDto postEditDto){
        postService.editPost(postEditDto);
    }
}
