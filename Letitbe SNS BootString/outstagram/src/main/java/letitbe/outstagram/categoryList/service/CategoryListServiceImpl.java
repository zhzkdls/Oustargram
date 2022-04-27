package letitbe.outstagram.categoryList.service;

import letitbe.outstagram.category.service.CategoryService;
import letitbe.outstagram.categoryList.dto.CategoryListDto;
import letitbe.outstagram.categoryList.model.CategoryList;
import letitbe.outstagram.categoryList.repository.CategoryListRepository;
import letitbe.outstagram.post.repository.PostRepository;
import letitbe.outstagram.post.service.PostService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Slf4j
@RequiredArgsConstructor
@Service
public class CategoryListServiceImpl implements CategoryListService{

    private final CategoryListRepository categoryListRepository;
    private final PostRepository postRepository;
    private final CategoryService categoryService;

    @Override
    public CategoryList addCategoryList(CategoryListDto categoryListDto) {
        log.info("Saving new categoryList to the Database. : {}", categoryListDto.getCategoryId());
        return categoryListRepository.save(CategoryList.builder()
                .category(categoryService.getCategory(categoryListDto.getCategoryId()).get())
                .post(postRepository.findById(categoryListDto.getPostId()).get())
                .build());
    }

    @Override
    public List<CategoryList> getAllCategoryList() {
        log.info("Fetching all categorylist.");
        return categoryListRepository.findAll();
    }

    @Override
    public Optional<CategoryList> getCategoryList(Long id) {
        log.info("Fetching categorylist {}", id);
        return Optional.ofNullable(categoryListRepository.findById(id).get());
    }

    @Override
    public void delCategoryList(Long id) {
        categoryListRepository.deleteById(id);
    }
}
