import React, { useEffect, useState } from 'react';
import PageTitle from '../widgets/PageTitle';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function AddPostPage() {
	const postUrl = "http://localhost:5001/post";
	const catUrl = "http://localhost:5000/categories";
	const snsUrl = "http://localhost:5000/sns";
	const navigate = useNavigate();

	const [categories, setCategories] = useState([]);
	const [snsList, setSnsList] = useState([]);

	const [image, setImage] = useState([]);
	const [imageKey, setImageKey] = useState(1);
	const [tag, setTag] = useState([]);
	const [tagKey, setTagKey] = useState(1);
	const [category, setCategory] = useState([]);
	const [categoryKey, setCategoryKey] = useState(1);

	const [newPost, setNewPost] = useState({
		author: "",
		postTitle: "",
		categoryId: [],
		tags: [],
		titleImage: "",
		images: [],
		text: "",
		snsList: "",
		created: "",
		updated: "",
		like: false,
		likeCount: 0
	});

	useEffect(() => {
		axios.get(catUrl).then(Response => setCategories(Response.data));
		axios.get(snsUrl).then(Response => setSnsList(Response.data));
	}, [catUrl, snsUrl]);

	const handleSubmit = (e) => {
		const { name, value } = e.target;
		setNewPost({
			...newPost,
			[name]: value
		});
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
		axios.post(postUrl, {
			...newPost,
			created: date + ' ' + time,
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
			<PageTitle title="Add Post" />
			<div className="inputGroupBox">
						<h5 className="eskimo-title-with-border"><span>글작성</span></h5>

				<form onSubmit={onSubmit}>
					<label class="inputLabel">작성자*</label>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Author" onChange={handleSubmit} name="author" required />
					</div>

					<label class="inputLabel">제목*</label>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Post Title" onChange={handleSubmit} name="postTitle" required />
					</div>

					<label class="inputLabel">카테고리</label>
					<div className="eskimo-meta-tags mt-0">
						{
							category.map(item => (
								<div className="badge badge-primary" key={item.id}>
									{item.name}
									<span className="delButton pointer" onClick={() => delCategory(item.id)}>x</span>
								</div>
							))
						}
					</div>
					<select className="form-select p-2 col-12" name="categoryId" onChange={addCategory}>
						<option defaultValue>Select Category</option>
						{
							categories.map(category => (<option key={category.id} value={category.name}>
								{category.name}
							</option>))
						}
					</select>

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
					</div>

					<label class="inputLabel">메인사진*</label>
					<img src={`./images/${newPost.titleImage}`} className="overviewImg" onError={handleImgError} />
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Title Image" onChange={handleSubmit} name="titleImage" required />
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
					</div>

					<label class="inputLabel">글 내용*</label>
					<div className="input-group">
						<textarea type="text" className="form-control text-box" placeholder="Text" onChange={handleSubmit} name="text" required />
					</div>

					<label class="inputLabel">SNS</label>
					<select className="form-select p-2 col-12" onChange={handleSubmit} name="snsList">
						<option defaultValue>Select SNS</option>
						{
							snsList.map(sns => (<option key={sns.id} value={sns.id}>{sns.name}</option>))
						}
					</select>
					<div className="text-center">
						<button type="submit" className="btn btn-primary my-2">글 올리기</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddPostPage;