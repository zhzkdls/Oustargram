package letitbe.outstagram.tag.controller;

import letitbe.outstagram.tag.model.Tag;
import letitbe.outstagram.tag.service.TagService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class TagController {


        private final TagService tagService;

        @PostMapping("/tag/add")
        public Tag add(@RequestBody Tag tag){
            return tagService.addTag(tag);
        }

        @GetMapping("/tag/getAll")
        public List<Tag> getAll(){
            return tagService.getAll();
        }

}
