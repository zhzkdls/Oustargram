package letitbe.outstagram.likeList.model;

import letitbe.outstagram.likes.model.Likes;
import letitbe.outstagram.user.model.User;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class LikeList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "like_id")
    private Likes likes;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    @Builder
    public LikeList(Likes likes, User user) {
        this.likes = likes;
        this.user = user;
    }
}
