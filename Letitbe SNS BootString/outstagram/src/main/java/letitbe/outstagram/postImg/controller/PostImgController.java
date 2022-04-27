package letitbe.outstagram.postImg.controller;

import letitbe.outstagram.postImg.model.PostImg;
import letitbe.outstagram.postImg.service.PostImgService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequiredArgsConstructor
@RestController
@RequestMapping("/PostImg")
public class PostImgController {

    private final PostImgService postImgService;

    @PostMapping("/add")
    public PostImg add(@RequestBody PostImg postImg){
        return postImgService.addPostImg(postImg);
    }

    @GetMapping("/getAll")
    public List<PostImg> getAll(){
        return postImgService.getAllPostImg();
    }
}
