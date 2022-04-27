package letitbe.outstagram.likeList.service;

import letitbe.outstagram.likeList.LikeListDto.LikeListDto;
import letitbe.outstagram.likeList.model.LikeList;

import java.util.List;

public interface LikeListService {
    LikeList addLikeList(LikeListDto likeListDto);
    List<LikeList> getAllLikeList();
}
