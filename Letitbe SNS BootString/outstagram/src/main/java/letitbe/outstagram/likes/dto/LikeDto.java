package letitbe.outstagram.likes.dto;

import lombok.Data;

@Data
public class LikeDto {

    private Long id;
    private Long likeCount;
    private Long PostId;
}
