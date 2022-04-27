package letitbe.outstagram.tagList.service;

import letitbe.outstagram.post.repository.PostRepository;
import letitbe.outstagram.post.service.PostService;
import letitbe.outstagram.tag.service.TagService;
import letitbe.outstagram.tagList.dto.TagListDto;
import letitbe.outstagram.tagList.model.TagList;
import letitbe.outstagram.tagList.repository.TagListRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class TagListServiceImple implements TagListService{

    private final TagListRepository tagListRepository;
    private final PostRepository postRepository;
    private final TagService tagService;

    @Override
    public TagList addTagList(TagListDto tagListDto) {
        log.info("Saving new tagList to the Database. : {}",tagListDto.getTagId());
        return tagListRepository.save(TagList.builder()
                        .post(postRepository.findById(tagListDto.getPostId()).get())
                        .tag(tagService.getTag(tagListDto.getTagId()).get())
                .build());
    }

    @Override
    public Optional<TagList> getTagList(Long id) {
        log.info("Fetching tagList. {}", id);
        return Optional.ofNullable(tagListRepository.findById(id)).get();
    }

    @Override
    public List<TagList> getAll() {
        log.info("Fetching all tagList.");
        return tagListRepository.findAll();
    }
}
