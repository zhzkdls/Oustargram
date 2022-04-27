import { useEffect, useState } from 'react';
import Comments from '../ui/post/Comments';
import CommentWrite from '../ui/post/CommentWrite';
import Content from '../ui/post/Content';
import axios from 'axios';
import { useParams } from "react-router";
import PageTitle from '../widgets/PageTitle';

function SearchPost() {
	const params = useParams();
	const url = `http://localhost:8080/api/post/get/${params.id}`;
	const [posts, setPosts] = useState([]);
	const [refreash, setRefreash] = useState(false);

	useEffect(() => {
		axios.get(url).then(Response => setPosts(Response.data.reverse())).then(setRefreash(false));
	}, [url, refreash, setRefreash]);

	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title={"Search: " + params.id} />
			<main id="eskimo-main-container">
				<div className="container">
					{
						posts.map(post => {
							return (
								<div key={post.id} className="card card-horizontal">
									<div className="card-body">
										<div className="card-horizontal-left">
											<Content post={post} setRefreash={setRefreash} />
											<hr />
											<Comments postId={post.id} refreash={refreash} setRefreash={setRefreash} />
											<CommentWrite postId={post.id} setRefreash={setRefreash} />
										</div>
									</div>
								</div>

							);
						})
					}
				</div>
			</main>
		</div>
	);
}

export default SearchPost;