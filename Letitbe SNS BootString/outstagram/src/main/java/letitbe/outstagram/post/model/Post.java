package letitbe.outstagram.post.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import letitbe.outstagram.comment.model.Comment;
import letitbe.outstagram.user.model.User;
import letitbe.outstagram.util.BaseTimeEntity;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class Post extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String postTitle;
    private String postText;
    private String titleImage;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "post",cascade = CascadeType.REMOVE)
    private List<Comment> commentList = new ArrayList<>();

    @Builder

    public Post(Long id, String postTitle, String postText, String titleImage, User user) {
        this.id = id;
        this.postTitle = postTitle;
        this.postText = postText;
        this.titleImage = titleImage;
        this.user = user;
    }
}
