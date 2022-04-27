package letitbe.outstagram.categoryList.repository;

import letitbe.outstagram.categoryList.model.CategoryList;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CategoryListRepository extends JpaRepository<CategoryList,Long> {

}
