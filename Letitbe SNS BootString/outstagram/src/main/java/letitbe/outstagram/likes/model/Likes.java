package letitbe.outstagram.likes.model;

import letitbe.outstagram.post.model.Post;
import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class Likes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;
    private Long likeCount;

    public Post getPost() {
        return post;
    }

    @Builder

    public Likes(Post post, long likeCount) {
        this.post = post;
        this.likeCount = likeCount;
    }
}
