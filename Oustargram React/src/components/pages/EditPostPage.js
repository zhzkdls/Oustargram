import React, { useEffect, useState } from 'react';
import PageTitle from '../widgets/PageTitle';
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function EditPostPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const postUrl = `http://localhost:8080/api/post/get/${id}`;
	const catUrl = "http://localhost:8080/api/category/getAll";
	// const snsUrl = "http://localhost:5000/sns";

	const [post, setPost] = useState([]);
	const [categories, setCategories] = useState([]);
	const [snsList, setSnsList] = useState([]);

	const [image, setImage] = useState([]);
	const [imageKey, setImageKey] = useState(1);
	const [tag, setTag] = useState([]);
	const [tagKey, setTagKey] = useState(1);
	const [category, setCategory] = useState([]);
	const [categoryKey, setCategoryKey] = useState(1);

	useEffect(() => {
		axios.get(postUrl).then(Response => {
			setPost(Response.data);
			// setTag(Response.data.tags);
			// setTagKey(Response.data.tags.length + 1);
			setCategory(Response.data.categoryId);
			// setCategoryKey(Response.data.categoryId.length + 1);
			// setImage(Response.data.images);
			// setImageKey(Response.data.images.length + 1);

		});
		// axios.get(catUrl).then(Response => setCategories(Response.data));
		// axios.get(snsUrl).then(Response => setSnsList(Response.data));
	}, [postUrl]);

	const handleSubmit = (e) => {
		const { name, value } = e.target
		setPost({
			...post,
			[name]: value
		})
	}

	const addImage = (e) => {
		if (e.target.value[e.target.value.length - 1] === ",") {
			setImage([
				...image,
				{
					id: imageKey,
					image: e.target.value.substr(0, e.target.value.length - 1)
				}
			]);
			e.target.value = "";
			setImageKey(imageKey + 1);
		}
	}

	const addTag = (e) => {
		if (e.target.value[e.target.value.length - 1] === ",") {
			setTag([
				...tag,
				{
					id: tagKey,
					tagName: e.target.value.substr(0, e.target.value.length - 1)
				}
			]);
			e.target.value = "";
			setTagKey(tagKey + 1);
		}
	}

	const addCategory = (e) => {
		if (!category.find(item => (item.name === e.target.value)) && e.target.value !== "Select Category") {
			setCategory([
				...category,
				{
					id: categoryKey,
					name: e.target.value
				}
			]);
			e.target.value = "Select Category";
			setCategoryKey(categoryKey + 1);
		}
	}

	const delImage = (id) => {
		setImage(image.filter(item => item.id !== id));
	}

	const delTag = (id) => {
		setTag(tag.filter(item => item.id !== id));
	}

	const delCategory = (id) => {
		setCategory(category.filter(item => item.id !== id));
	}

	const onSubmit = (event) => {
		event.preventDefault();
		const date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]
		const time = new Date().toTimeString().split(" ")[0];
		axios.put(`http://localhost:8080/api/post/edit/${id}`, {
			...post,
			updated: date + ' ' + time,
			images: image,
			tags: tag,
			categoryId: category
		}).then(navigate("/"));
	}

	const handleImgError = (e) => {
		e.target.src = "";
	}

	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="Edit Post" />
			<div className="inputGroupBox">
				<h5 className="eskimo-title-with-border"><span>글 수정</span></h5>

				<form onSubmit={onSubmit}>
					<label class="inputLabel">작성자*</label>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Author" onChange={handleSubmit} value={post.author} name="author" required />
					</div>

					<label class="inputLabel">제목*</label>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Post Title" onChange={handleSubmit} value={post.postTitle} name="postTitle" required />
					</div>

					<label class="inputLabel">카테고리</label>
					<div className="eskimo-meta-tags mt-0">
						{
							
								<div className="badge badge-primary" >
									{categories}
									
								</div>
							
						}
					</div>
					<select className="form-selectp-2 col-12" name="categoryId" onChange={addCategory}>
						<option defaultValue>Select Category</option>
						{
							categories.map(category => (<option key={category.id} value={category.name}>
								{category.name}
							</option>))
						}
					</select>
{/* 
					<label class="inputLabel">태그 - 쉼표( , )로 구분</label>
					<div className="eskimo-meta-tags mt-0">
						{
							tag.map(item => (
								<div className="badge badge-default" key={item.id}>
									#{item.tagName}
									<span className="delButton pointer" onClick={() => delTag(item.id)}>x</span>
								</div>
							))
						}
					</div>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Tags" onChange={addTag} name="tags" />
					</div> */}

					{/* <label class="inputLabel">메인사진*</label>
					<img src={`./images/${post.titleImage}`} className="overviewImg" onError={handleImgError} />
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Title Image" onChange={handleSubmit} value={post.titleImage} name="titleImage" required />
					</div>

					<label class="inputLabel">추가사진 - 쉼표( , )로 구분</label>
					<div className="container">
						<div className="row">
							{
								image.map(item => (
									<img className="col-6 col-md-4 img-fluid singlePostImg" src={`./images/${item.image}`} alt="" />
								))
							}
						</div>
					</div>
					<div className="eskimo-meta-tags mt-0">
						{
							image.map(item => (
								<div className="badge badge-success" key={item.id}>
									@{item.image}
									<span className="delButton pointer" onClick={() => delImage(item.id)}>x</span>
								</div>
							))
						}
					</div>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Images" onChange={addImage} name="images" />
					</div> */}

					<label class="inputLabel">글 내용*</label>
					<div className="input-group">
						<textarea type="text" className="form-control" placeholder="Text" onChange={handleSubmit} value={post.postText} name="text" required />
					</div>


					<label class="inputLabel">SNS</label>
					<select className="form-selectp-2 col-12" onChange={handleSubmit} value={post.snsList} name="snsList">
						<option defaultValue>Select SNS</option>
						{
							snsList.map(sns => (<option key={sns.id} value={sns.id}>{sns.name}</option>))
						}
					</select>
					<div className="text-center">
						<button type="submit" className="btn btn-primary my-2">글 수정하기</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default EditPostPage;