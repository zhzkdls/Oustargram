package letitbe.outstagram.likeList.controller;

import letitbe.outstagram.likeList.model.LikeList;
import letitbe.outstagram.likeList.service.LikeListService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user/{id}/like")
public class LikeListController {


    private final LikeListService likeListService;



    @GetMapping("/getAll")
    public List<LikeList> getAll() {
        return likeListService.getAllLikeList();
    }
}
