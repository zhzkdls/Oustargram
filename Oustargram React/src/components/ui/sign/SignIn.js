import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function SignIn() {
	const url = `http://localhost:5003/users?userId=`;
	const navigate = useNavigate();
	const userId = useRef();
	const userPw = useRef();
	const [errMsg, setErrMsg] = useState("");

	const login = (e) => {
		e.preventDefault();
		axios.get(url + userId.current.value)
			.then(Response => {
				if (Response.data.length > 0 && Response.data[0].userPw === userPw.current.value) {
					navigate("/");
				} else if (userId.current.value.length < 4) {
					setErrMsg("ID를 입력하세요.");
				} else if (userPw.current.value.length < 4) {
					setErrMsg("Password를 입력하세요.");
				} else if (Response.data.length === 0) {
					setErrMsg("ID가 없습니다.");
				} else {
					setErrMsg("Password 틀립니다.");
				}
			});
	}
	return (
		<div className="signForm">
			<form onSubmit={login}>
				<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

				<div className="form-floating">
					<input type="text" className="form-control mb-3" placeholder="ID" ref={userId} />
				</div>
				<div className="form-floating">
					<input type="password" className="form-control" placeholder="Password" ref={userPw} />
				</div>

				<div className="checkbox mb-3">
					<label>
						<input type="checkbox" /> Remember me
					</label>
				</div>
				<div className="mb-2 signErrMsg">{errMsg}</div>
				<button className="w-100 btn btn-lg btn-primary" id="SignInButton" type="submit">Sign in</button>
				<p className="mt-5 mb-3 text-muted">로그인</p>
			</form>
		</div>
	);
}

export default SignIn;