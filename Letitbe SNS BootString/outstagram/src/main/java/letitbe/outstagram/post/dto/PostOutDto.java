package letitbe.outstagram.post.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PostOutDto {

    private String postTitle;
    private String postText;
    private String titleImage;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;

    @Builder

    public PostOutDto(String postTitle, String postText, String titleImage, LocalDateTime createDate, LocalDateTime updateDate) {
        this.postTitle = postTitle;
        this.postText = postText;
        this.titleImage = titleImage;
        this.createDate = createDate;
        this.updateDate = updateDate;
    }
}

