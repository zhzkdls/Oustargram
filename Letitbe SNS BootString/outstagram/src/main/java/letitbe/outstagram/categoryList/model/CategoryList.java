package letitbe.outstagram.categoryList.model;

import letitbe.outstagram.category.model.Category;
import letitbe.outstagram.post.model.Post;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@Data
@Entity
public class CategoryList {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "category_id")
    private Category category;


    @Builder
    public CategoryList(Post post, Category category) {
        this.post = post;
        this.category = category;
    }
}
