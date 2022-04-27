package letitbe.outstagram.tagList.repository;

import letitbe.outstagram.tagList.model.TagList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagListRepository extends JpaRepository<TagList, Long> {
}
