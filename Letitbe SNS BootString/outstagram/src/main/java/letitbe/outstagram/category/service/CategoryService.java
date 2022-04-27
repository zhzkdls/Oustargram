package letitbe.outstagram.category.service;

import letitbe.outstagram.category.model.Category;

import java.util.List;
import java.util.Optional;


public interface CategoryService {
    Category addCategory(Category category);
    List<Category> getAllCategory();
    Optional<Category> getCategory(Long id);

}
