package letitbe.outstagram.tag.service;

import letitbe.outstagram.tag.model.Tag;

import java.util.List;
import java.util.Optional;

public interface TagService {
    Tag addTag(Tag tag);
    List<Tag> getAll();
    Optional<Tag> getTag(Long id);
}
