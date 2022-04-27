package letitbe.outstagram.post.service;

import letitbe.outstagram.category.model.Category;
import letitbe.outstagram.category.service.CategoryService;
import letitbe.outstagram.categoryList.model.CategoryList;
import letitbe.outstagram.categoryList.repository.CategoryListRepository;
import letitbe.outstagram.post.dto.PostDto;
import letitbe.outstagram.post.dto.PostEditDto;
import letitbe.outstagram.post.model.Post;
import letitbe.outstagram.post.dto.PostOutDto;
import letitbe.outstagram.post.repository.PostRepository;
import letitbe.outstagram.tag.model.Tag;
import letitbe.outstagram.tag.service.TagService;
import letitbe.outstagram.tagList.model.TagList;
import letitbe.outstagram.tagList.repository.TagListRepository;
import letitbe.outstagram.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class PostServiceImpl implements PostService{

private final PostRepository postRepository;
private final UserService userService;
private final CategoryService categoryService;
private final CategoryListRepository categoryListRepository;


@Override
public int addPost(PostDto postDto) {
        try {
        log.info("Add by post {}", postDto.getPostTitle());
        Post post = postRepository.save(
        Post.builder()
        .postTitle(postDto.getPostTitle())
        .postText(postDto.getPostText())
        .user(userService.getUserById(postDto.getUserId()).get())
        .titleImage(postDto.getTitleImage())
        .build()
        );

        log.info("Post Id {}, Category Id {}", post.getId(), postDto.getCategoryId());
        log.info("Post Id {}, tag Id {}", post.getId(), postDto.getTagId());

        Category category = categoryService.getCategory(postDto.getCategoryId()).get();

        categoryListRepository.save(CategoryList.builder()
        .category(category)
        .post(post)
        .build() );

        return 1;
        }catch (Exception e){
        log.info("error .{}",e.getMessage());
        return 0;
        }
        }


@Override
public List<Post> getAllPost() {
        log.info("Fetching All Post.");
        return postRepository.findAll();
        }

@Override
public PostOutDto getPostById(Long id) {

        log.info("Fetching post Id. {}",id);

        Post post = postRepository.findById(id).get();


        return PostOutDto.builder()
        .createDate(post.getCreateDate())
        .updateDate(post.getModifiedDate())
        .postText(post.getPostText())
        .postTitle(post.getPostTitle())
        .titleImage(post.getTitleImage())
        .build();

        }

@Override
public List<Post> getPostByAuthorId(Long id) {
        log.info("Fetching post ");
        return postRepository.findAllByUserId(id);
        }

        @Override
        public void delPost(Long id) {
                postRepository.deleteById(id);
                log.info("Delete by post {}", id);
                }

        @Override
        public void delAllPostByUserId(Long id) {
        postRepository.deleteAll(postRepository.findAllByUserId(id));
        }

        @Override
        public void editPost(PostEditDto postEditDto) {

                Post post = postRepository.findById(postEditDto.getId()).get();
               post.setPostText(postEditDto.getPostText());
               postRepository.save(post);
        }
}
