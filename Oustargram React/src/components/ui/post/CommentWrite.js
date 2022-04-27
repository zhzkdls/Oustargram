import axios from 'axios';
import React, { useRef } from 'react';

function CommentWrite({ postId, setRefreash }) {
	const url = "http://localhost:8080/api/comment/add";
	const refComment = useRef(null);
	const refName = useRef(null);

	const handelSubmit = (e) => {
		e.preventDefault();
		const date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]
		const time = new Date().toTimeString().split(" ")[0];
		axios.post(url, {
			userId: refName.current.value,
			commentText: refComment.current.value,
			postId: postId
		}).then(() => {
			refName.current.value = "";
			refComment.current.value = "";
			setRefreash(true);
		}).then(console.log("userId : "+ refName.current.value," commentText " + refComment.current.value,"postId " +postId));
	}
	return (
		<form onSubmit={handelSubmit}>
			<div className="input-group mt-2">
				<input type="text" placeholder="아이디" className="form-control col-2" ref={refName} required />
				<input type="text" placeholder="댓글" className="form-control col-10" ref={refComment} required />
				<button type="submit" className="input-group-text pointer btn-primary">댓글 달기</button>
			</div>
		</form>
	);
}

export default CommentWrite;