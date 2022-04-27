package letitbe.outstagram.tagList.model;

import letitbe.outstagram.post.model.Post;
import letitbe.outstagram.tag.model.Tag;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class TagList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    @Builder
    public TagList(Tag tag, Post post) {
        this.tag = tag;
        this.post = post;
    }
}
