import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function SinglePostComments({ refreash, setRefreash }) {
	const params = useParams();
	const commentUrl = `http://localhost:8080/api/comment/getAll`
	const [comments, setComments] = useState([]);

	useEffect(() => {
		axios.get(commentUrl + `?postId=${params.id}`).then(Response => setComments(Response.data));
		setRefreash(false);
	}, [commentUrl, params.id, refreash, setRefreash]);

	const delComment = (id) => {
		axios.delete(commentUrl + `/${id}`).then(setRefreash(true));
	}
	return (
		<div id="eskimo-comments-wrapper">
			<div id="eskimo_comments_block" className="eskimo_comments_block">
				<h3 className="eskimo-title-with-border mt-5">
					<span>Comments</span>
				</h3>
				<div className="eskimo_commentlist">
					{
						comments.map(comment => (
							<div key={comment.id} className="eskimo_comment_wrapper">
								<div className="eskimo_comments">
									<div className="eskimo_comment">
										<div className="eskimo_comment_inner">
											<div className="eskimo_comment_left">
												<img alt='' src='./images/person-fill.svg' />
											</div>
											<div className="eskimo_comment_right">
												<div className="eskimo_comment_right_inner ">
													<cite className="eskimo_fn d-flex justify-content-between">
														<span>{comment.author}</span>
														<span className="pointer" onClick={() => delComment(comment.id)}><i className="fa fa-times"></i></span>
													</cite>
													<div className="eskimo_comment_links">
														<i className="fa fa-clock-o" id="clock"></i>
														{comment.updated} -
														<span > Reply</span>
													</div>
													<div className="eskimo_comment_text">
														<p>{comment.text}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
}

export default SinglePostComments;