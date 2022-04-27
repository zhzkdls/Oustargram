package letitbe.outstagram.categoryList.service;

import letitbe.outstagram.categoryList.dto.CategoryListDto;
import letitbe.outstagram.categoryList.model.CategoryList;

import java.util.List;
import java.util.Optional;

public interface CategoryListService {
    CategoryList addCategoryList(CategoryListDto categoryListDto);
    List<CategoryList> getAllCategoryList();
    Optional<CategoryList> getCategoryList(Long id);
    void delCategoryList(Long id);

}
