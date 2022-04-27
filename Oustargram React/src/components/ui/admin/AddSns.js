import axios from 'axios';
import React, { useRef } from 'react';

function AddSns() {
	const url = "http://localhost:5000/sns";
	const refSns = useRef(null);
	const handelSubmit = (e) => {
		e.preventDefault();
		axios.post(url, { name: refSns.current.value }).then(alert("등록에 성공했습니다.")).then(refSns.current.value = "")
	}
	return (
		<>
			<figure className="text-center">
				<blockquote className="blockquote">
					<p>SNS 추가</p>
				</blockquote>
				<figcaption className="blockquote-footer">
					ex) <cite>Facebook</cite>
				</figcaption>
			</figure>

			<form onSubmit={handelSubmit}>
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Recipient's username" ref={refSns} required />
				</div>
				<button type="submit" className="btn btn-primary">추가하기</button>
			</form>
		</>
	);
}

export default AddSns;