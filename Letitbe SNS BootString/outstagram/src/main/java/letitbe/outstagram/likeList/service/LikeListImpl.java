package letitbe.outstagram.likeList.service;

import letitbe.outstagram.likeList.LikeListDto.LikeListDto;
import letitbe.outstagram.likeList.model.LikeList;
import letitbe.outstagram.likeList.repository.LikeListRepository;
import letitbe.outstagram.likes.model.Likes;
import letitbe.outstagram.likes.service.LikeService;
import letitbe.outstagram.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
@Slf4j
@RequiredArgsConstructor
@Service
public class LikeListImpl implements LikeListService{

    private final LikeListRepository likeListRepository;
    private final LikeService likeService;
    private final UserService userService;

    @Override
    public LikeList addLikeList(LikeListDto likeListDto) {
        log.info("Saving new LikeList the Database. : userId{}", likeListDto.getUserId());
        return likeListRepository.save(LikeList.builder()
                        .likes(likeService.getLikes(likeListDto.getLikeId()).get())
                        .user(userService.getUserById(likeListDto.getUserId()).get())

                .build());
    }

    @Override
    public List<LikeList> getAllLikeList() {
        log.info("Fetching All LikeList.");
        return likeListRepository.findAll();
    }
}
