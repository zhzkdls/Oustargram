package letitbe.outstagram.imgList.service;

import letitbe.outstagram.imgList.dto.ImgListDto;
import letitbe.outstagram.imgList.model.ImgList;
import letitbe.outstagram.imgList.repository.ImgListRepository;
import letitbe.outstagram.post.repository.PostRepository;
import letitbe.outstagram.post.service.PostService;
import letitbe.outstagram.postImg.service.PostImgService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Slf4j
@RequiredArgsConstructor
@Service
public class ImgListServiceImpl implements ImgListService{

    private final ImgListRepository imgListRepository;
    private final PostRepository postRepository;
    private final PostImgService postImgService;
    @Override
    public ImgList addImgList(ImgListDto imgListDto) {
        log.info("Saving new imgList to the Database. : {}",imgListDto.getPostImgId());
        return imgListRepository.save(ImgList.builder()
                        .post(postRepository.findById(imgListDto.getPostId()).get())
                        .postImg(postImgService.getPostImg(imgListDto.getPostImgId()).get())
                .build());
    }

    @Override
    public List<ImgList> getAllImgList() {
        log.info("Fetching all ImgList.");
        return imgListRepository.findAll();
    }

    @Override
    public Optional<ImgList> getImgList(Long id) {
        log.info("Fetching ImgList. {} ", id);
        return Optional.ofNullable(imgListRepository.findById(id).get());
    }
}
