import { useEffect, useState } from 'react';
import Comments from './Comments';
import CommentWrite from './CommentWrite';
import Content from './Content';
import axios from 'axios';

function Post({ more }) {
	const url = `http://localhost:8080/api/post/getAll`;
	const [posts, setPosts] = useState([]);
	const [refreash, setRefreash] = useState(false);

	useEffect(() => {
		axios.get(url).then(Response => setPosts(Response.data));
	}, [url]);


	return (
		posts.map(post => {
			return (
				<div key={post.id} className="card card-horizontal">
					<div className="card-body">
						<div className="card-horizontal-left">
							<Content post={post}/>
							<hr />
							<Comments postId={post.id} refreash={refreash} setRefreash={setRefreash} />
							<CommentWrite postId={post.id} setRefreash={setRefreash} />
						</div>
					</div>
				</div>
			);
		})
	);
}

export default Post;