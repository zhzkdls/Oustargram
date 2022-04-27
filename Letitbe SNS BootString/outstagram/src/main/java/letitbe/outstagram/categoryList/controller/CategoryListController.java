package letitbe.outstagram.categoryList.controller;


import letitbe.outstagram.categoryList.dto.CategoryListDto;
import letitbe.outstagram.categoryList.model.CategoryList;
import letitbe.outstagram.categoryList.service.CategoryListService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
@CrossOrigin
public class CategoryListController {

    private final CategoryListService categoryListService;


    @PostMapping("/categorylist/add")
    public CategoryList add(@RequestBody CategoryListDto categoryListDto){
        return categoryListService.addCategoryList(categoryListDto);

    }

    @GetMapping("/categorylist/getAll")
    public List<CategoryList> getAllCategoryList(){
        return categoryListService.getAllCategoryList();
    }

    @DeleteMapping("/catgorylist/del/{id}")
    public void  del(@PathVariable Long id){
        categoryListService.delCategoryList(id);
    }
}
