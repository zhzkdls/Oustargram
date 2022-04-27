package letitbe.outstagram.comment.model;

import letitbe.outstagram.post.model.Post;
import letitbe.outstagram.user.model.User;
import letitbe.outstagram.util.BaseTimeEntity;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class Comment extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String commentText;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "post_id")
    private Post post;

    @Builder

    public Comment(String commentText, User user, Post post) {
        this.commentText = commentText;
        this.user = user;
        this.post = post;
    }
}
