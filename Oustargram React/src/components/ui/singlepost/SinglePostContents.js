import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
// import Sns from './Sns';

function SinglePostContents({ setTitle }) {
	const params = useParams();
	const url = `http://localhost:8080/api/post/get/${params.id}`;
	const navigate = useNavigate();
	const [post, setPost] = useState({});

	useEffect(() => {
		axios.get(url).then(Response => {
			setPost(Response.data);
			setTitle(Response.data.postTitle);
		});
	}, [url, setTitle]);

	const delPost = () => {
		if (window.confirm("정말 삭제하시겠습니까?")) {
			axios.delete(url).then(navigate("/"));
		}
	}

	return (
		<>
			{/* <div className="likeCounter"><i className="fa fa-heart" id="thumsUpFav"></i>{`${post.likeCount}`} Likes</div> */}
			<div className="clearfix"></div>
			<div className="eskimo-featured-img">
				<img src={`./images/${post.titleImage}`} alt="" />
			</div>
			<div className="eskimo-page-content">
				{post.postText}
				<div className="container mt-3">
					<div className="row">
						{
							post.images && post.images.map(image => (
								<img
									key={image.id}
									className=" col-12 col-md-6 col-xl-4 img-fluid singlePostImg"
									src={`./images/${image.image}`}
									alt=""
								/>
							))
						}
					</div>
				</div>

				<div className="mt-2">
					by <Link to={`/search${post.author}`}>{post.author}</Link>
				</div>
				{/* <p className="mb-0">{post.text}</p> */}
				<div className="clearfix"></div>
				<div className="d-flex justify-content-between mb-3">
					<div className="eskimo-meta-tags">
						{
							post.tags && post.tags.map(tag => (<span key={tag.id} className="badge badge-default">#{tag.tagName}</span>))
						}
					</div>
					<div>
						<Link to={`/editpost${post.id}`}>
							<button type="button" className="btn btn-primary mt-3">Edit</button>
						</Link>
						<button type="button" className="btn btn-secondary mt-3" onClick={delPost}>Del</button>
					</div>
				</div>
				{/* <Sns /> */}

				{/* <div className="eskimo-post-nav-wrapper">
					<div className="eskimo-post-nav-left-row">
						<div className="eskimo-post-nav-table">
							<span className="eskimo-post-nav" >
								<i className="fa fa-chevron-left"></i>
							</span>
							<div className="eskimo-post-nav-link">
								<span className="eskimo-post-nav" >Best Breakfast In The World</span>
							</div>
						</div>
					</div>

					<div className="eskimo-post-nav-right-row">
						<div className="eskimo-post-nav-table">
							<div className="eskimo-post-nav-link">
								<span className="eskimo-post-nav" >15 Of The World&#8217;s Best Carnivals</span>
							</div>
							<span className="eskimo-post-nav" >
								<i className="fa fa-chevron-right"></i></span>
						</div>
					</div>
				</div> */}
			</div>
			<div className="clearfix"></div>
		</>
	);
}

export default SinglePostContents;