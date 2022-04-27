import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function PageTitle({ title }) {
	const params = useParams();
	const url = `http://localhost:5001/post/${params.id}`;
	const [post, setPost] = useState({});

	useEffect(() => {
		axios.get(url).then(Response => setPost(Response.data));
	}, [url])

	const handleView = () => {
		if (params.id > 0) {
			return (<>
				<div className="eskimo-page-title-meta">
					<div className="eskimo-author-meta">by {post.author}</div>
					<div className="eskimo-cat-meta">
						{
							post.categoryId && post.categoryId.map(category => (
								category.name
							))
						}
					</div>
					<div className="eskimo-date-meta">created {post.created}</div>
					<div className="eskimo-reading-meta">updated {post.updated}</div>
				</div>
			</>)
		}
	}

	return (
		<div className="eskimo-page-title" style={{ opacity: 1 }}>
			<h1 className="no-border">{title}</h1>
			{handleView()}
		</div>
	);
}

export default PageTitle;