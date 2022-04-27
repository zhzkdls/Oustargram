package letitbe.outstagram.post.dto;

import lombok.Data;

@Data
public class PostDto {

    private String postTitle;
    private String postText;
    private Long userId;
    private Long categoryId;
    private String titleImage;
    private Long tagId;
}
