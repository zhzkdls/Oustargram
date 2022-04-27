package letitbe.outstagram.imgList.service;

import letitbe.outstagram.imgList.dto.ImgListDto;
import letitbe.outstagram.imgList.model.ImgList;


import java.util.List;
import java.util.Optional;

public interface ImgListService {
    ImgList addImgList(ImgListDto imgListDto);
    List<ImgList> getAllImgList();
    Optional<ImgList> getImgList(Long id);
}
