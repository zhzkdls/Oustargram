package letitbe.outstagram.post.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class PostEditDto {

    private Long id;
    private String postText;

}
