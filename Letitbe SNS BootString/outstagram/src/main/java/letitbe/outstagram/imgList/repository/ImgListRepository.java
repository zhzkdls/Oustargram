package letitbe.outstagram.imgList.repository;

import letitbe.outstagram.imgList.model.ImgList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImgListRepository extends JpaRepository<ImgList,Long> {
}
