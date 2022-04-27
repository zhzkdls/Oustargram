package letitbe.outstagram.tagList.service;

import letitbe.outstagram.tagList.dto.TagListDto;
import letitbe.outstagram.tagList.model.TagList;

import java.util.List;
import java.util.Optional;

public interface TagListService {
    TagList addTagList(TagListDto tagListDto);
    Optional<TagList> getTagList(Long id);
    List<TagList> getAll();
}
