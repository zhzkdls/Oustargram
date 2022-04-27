package letitbe.outstagram.commentList.model;

import letitbe.outstagram.comment.model.Comment;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class CommentList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String commentListText;
    @ManyToOne
    @JoinColumn(name = "comment_id")
    private Comment comment;

    @Builder
    public CommentList(String commentListText, Comment comment) {
        this.commentListText = commentListText;
        this.comment = comment;
    }
}
