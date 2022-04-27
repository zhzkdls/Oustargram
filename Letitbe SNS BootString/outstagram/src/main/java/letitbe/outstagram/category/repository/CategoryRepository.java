package letitbe.outstagram.category.repository;

import letitbe.outstagram.category.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
