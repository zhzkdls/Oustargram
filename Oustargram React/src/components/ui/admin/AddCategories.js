import axios from 'axios';
import React, { useRef } from 'react';

function AddCategories() {
	const url = "http://localhost:5000/categories";
	const refCategories = useRef(null);
	const handelSubmit = (event) => {
		event.preventDefault();
		axios.post(url, { name: refCategories.current.value }).then(alert("등록에 성공했습니다.")).then(refCategories.current.value = "")
	}
	return (
		<>
			<figure>
				<blockquote className="blockquote">
					<p>Categories 추가</p>
				</blockquote>
				<figcaption className="blockquote-footer">
					ex) <cite>Camping</cite>
				</figcaption>
			</figure>

			<form onSubmit={handelSubmit}>
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Recipient's username" ref={refCategories} required />
				</div>
				<button type="submit" className="btn btn-primary">추가하기</button>
			</form>
		</>
	);
}

export default AddCategories;