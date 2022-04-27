package letitbe.outstagram.comment.controller;


import letitbe.outstagram.comment.dto.CommentDto;
import letitbe.outstagram.comment.dto.CommentEditDto;
import letitbe.outstagram.comment.model.Comment;
import letitbe.outstagram.comment.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/comment/add")
    public Comment add(@RequestBody CommentDto commentDto){
        return commentService.addComment(commentDto);
    }

    @GetMapping ("/comment/getAll")
    public List<Comment> getAllComment(){
        return commentService.getAllComment();
    }

    @GetMapping("/comment/getpost/{id}")
    public List<Comment> getAllbyPostId(@PathVariable Long id){
        return commentService.getAllByPostId(id);
    }

    @PutMapping("/comment/update/{id}")
    public void update(@PathVariable Long id,@RequestBody CommentEditDto commentEditDto){
        commentService.editComment(commentEditDto);
    }

    @DeleteMapping("/comment/del/{id}")
    public void delComment(@PathVariable Long id){
        commentService.delComment(id);
    }

}


