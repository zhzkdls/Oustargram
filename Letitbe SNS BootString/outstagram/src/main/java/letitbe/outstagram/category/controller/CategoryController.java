package letitbe.outstagram.category.controller;

import letitbe.outstagram.category.model.Category;
import letitbe.outstagram.category.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
@CrossOrigin
public class CategoryController {


    private final CategoryService categoryService;

    @PostMapping("/category/add")
    public Category add(@RequestBody Category category){
        return categoryService.addCategory(category);
    }

    @GetMapping("/category/getAll")
    public List<Category> getAllCategory(){
        return categoryService.getAllCategory();
    }
}
