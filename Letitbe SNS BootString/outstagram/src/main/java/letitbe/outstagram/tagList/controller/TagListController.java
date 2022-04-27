package letitbe.outstagram.tagList.controller;

import letitbe.outstagram.tagList.dto.TagListDto;
import letitbe.outstagram.tagList.model.TagList;
import letitbe.outstagram.tagList.service.TagListService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class TagListController {


        private final TagListService tagListService;

        @PostMapping("/taglist/add")
        public TagList add(@RequestBody TagListDto tagListDto){
            return tagListService.addTagList(tagListDto);
        }

        @GetMapping("/taglist/getAll")
        public List<TagList> getAllTagList(){
            return tagListService.getAll();
        }

}
