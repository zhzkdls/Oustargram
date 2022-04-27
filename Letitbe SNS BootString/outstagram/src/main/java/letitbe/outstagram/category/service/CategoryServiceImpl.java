package letitbe.outstagram.category.service;

import letitbe.outstagram.category.model.Category;
import letitbe.outstagram.category.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class CategoryServiceImpl implements CategoryService {


    private final CategoryRepository categoryRepository;

    @Override
    public Category addCategory(Category category) {
        log.info("Saving new category to the Database. {}", category.getName());
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> getAllCategory() {
        log.info("Fetching all category.");
        return categoryRepository.findAll();
    }

    @Override
    public Optional<Category> getCategory(Long id) {
        log.info("Fetching category {}", id);
        return Optional.ofNullable(categoryRepository.findById(id)).get();
    }
}
