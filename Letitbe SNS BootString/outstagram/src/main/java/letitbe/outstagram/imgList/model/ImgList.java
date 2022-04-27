package letitbe.outstagram.imgList.model;

import letitbe.outstagram.post.model.Post;
import letitbe.outstagram.postImg.model.PostImg;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class ImgList {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "post_img_id")
    private PostImg postImg;

    @Builder

    public ImgList(Post post, PostImg postImg) {
        this.post = post;
        this.postImg = postImg;
    }
}
