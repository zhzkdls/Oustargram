package letitbe.outstagram.imgList.controller;

import letitbe.outstagram.imgList.dto.ImgListDto;
import letitbe.outstagram.imgList.model.ImgList;
import letitbe.outstagram.imgList.service.ImgListService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class ImgListController {

    private final ImgListService imgListService;


    @PostMapping("/imglist/add")
    public ImgList addImgList(ImgListDto imgListDto){
        return imgListService.addImgList(imgListDto);
    }

    @GetMapping("/imglist/getAll")
    public List<ImgList> getAllImgList(){
        return imgListService.getAllImgList();
    }
}
