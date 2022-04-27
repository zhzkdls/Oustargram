import React from 'react';
import AddCategories from '../ui/admin/AddCategories';
import AddSns from '../ui/admin/AddSns';
import PageTitle from '../widgets/PageTitle';

function AdminPage() {
	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title = "Admin Page" />
			<div className="inputGroupBox text-center">
				<AddSns />
				<AddCategories />
			</div>
		</div>
	);
}

export default AdminPage;