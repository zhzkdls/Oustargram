package letitbe.outstagram.likes.controller;

import letitbe.outstagram.likes.dto.LikeDto;
import letitbe.outstagram.likes.model.Likes;
import letitbe.outstagram.likes.service.LikeService;
import letitbe.outstagram.post.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RequiredArgsConstructor
@RestController
@RequestMapping("post/{id}/like")
public class LikeController {

    private final LikeService likeService;

    @GetMapping("/add")
    public Likes add(@RequestBody LikeDto likeDto) {
        return likeService.addLike(likeDto);

    }

    @GetMapping("/getAll")
    public List<Likes> getAll(Long id) {
        return likeService.getAllLike();
    }
}
