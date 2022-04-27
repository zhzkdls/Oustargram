package letitbe.outstagram.tag.repository;

import letitbe.outstagram.tag.model.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
