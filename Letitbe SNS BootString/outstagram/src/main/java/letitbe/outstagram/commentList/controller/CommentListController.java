package letitbe.outstagram.commentList.controller;


import letitbe.outstagram.commentList.model.CommentList;
import letitbe.outstagram.commentList.service.CommentListService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/commentList")
public class CommentListController {


    private final CommentListService commentListService;

    @PostMapping("/add")
    public CommentList add(@RequestBody CommentList commentList){
        return commentListService.addCommentList(commentList);
    }

    @PostMapping("/getAll")
    public List<CommentList> getAllCommentList(){
        return commentListService.getAllCommentList();
    }

}
