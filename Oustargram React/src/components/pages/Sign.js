import React from 'react';
import SignIn from '../ui/sign/SignIn';
import SignUp from '../ui/sign/SignUp';
import PageTitle from '../widgets/PageTitle';

function Sign() {
	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="Sign in / Sign up" />
			<div className="text-center signBox d-flex justify-content-center flex-wrap">
				<SignIn />
				<SignUp />
			</div>
		</div >
	);
}

export default Sign;