package letitbe.outstagram.tag.service;

import letitbe.outstagram.tag.model.Tag;
import letitbe.outstagram.tag.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Slf4j
@RequiredArgsConstructor
@Service
public class TagServiceImple implements TagService{

    private final TagRepository tagRepository;

    @Override
    public Tag addTag(Tag tag) {
        log.info("Saving new Tag to the Database. : {}", tag.getTagName());
        return tagRepository.save(tag);
    }

    @Override
    public List<Tag> getAll() {
        log.info("Fetching all tag.");
        return tagRepository.findAll();
    }

    @Override
    public Optional<Tag> getTag(Long id) {
        log.info("Fetching tag {}",id);
        return Optional.ofNullable(tagRepository.findById(id)).get();
    }
}
