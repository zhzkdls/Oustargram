import React, { useEffect, useState } from 'react';
import PageTitle from '../widgets/PageTitle';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function AddPostPage() {

	
	// const postUrl = "http://localhost:5001/post";
	const catUrl = "http://localhost:8080/api/category/getAll"
	const navigate = useNavigate();

	const [categories, setCategories] = useState([]);
	

	const [image, setImage] = useState([]);
	const [imageKey, setImageKey] = useState(1);
	const [tag, setTag] = useState([]);
	const [tagKey, setTagKey] = useState(1);
	const [category, setCategory] = useState([]);
	const [categoryKey, setCategoryKey] = useState(1);
	const [newPost, setNewPost] = useState({
		authorId: "",
		postTitle: "",
		categoryId: [],
		postText: "",
		titleImage : "",
		tagId: []
	});

	useEffect(() => {
		axios.get(catUrl)
		.then(Response => {
			setCategories(Response.data)
		console.log(Response)}
		)

	}, [catUrl]);

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

	const handleSubmit = (e) => {
		const { name, value } = e.target;
		setNewPost({
			...newPost,
			[name]: value
		});
	}

	const onSubmit = (event) => {
		event.preventDefault();
	
		axios.post("http://localhost:8080/api/post/add", {
			postTitle : newPost.postTitle,
			postText : newPost.postText,
			titleImage : newPost.titleImage,
			userId : newPost.authorId,
			categoryId : category[0].name,
			tagId : tag[0].id
		}).then(
			console.log(newPost.postTitle,newPost.postText),console.log("업되었을껄요?"),
			navigate("/")
		);

	}
	const delCategory = (id) => {
		setCategory(category.filter(item => item.id !== id));
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
			
			setCategoryKey(categoryKey + 1);
		}
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
						<input type="text" className="form-control" placeholder="Author" onChange={handleSubmit} name="authorId" required />
					</div>

					<label class="inputLabel">제목*</label>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Post Title" onChange={handleSubmit} name="postTitle" required />
					</div>
					<label class="inputLabel">카테고리</label>
					{/* <div className="eskimo-meta-tags mt-0">
						{
							category.map(item => (
								<div className="badge badge-primary" key={item.id}>
									{item.name}
									<span className="delButton pointer" onClick={() => delCategory(item.id)}>x</span>
								</div>
								
							))
						}
					</div> */}
					<select className="form-select p-2 col-12" name="category" onChange={addCategory}>
						<option defaultValue>Select Category</option>
						{
							categories.map(category => (<option key={category.id} value={category.id}>
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
					

					<label class="inputLabel">글 내용*</label>
					<div className="input-group">
						<textarea type="text" className="form-control text-box" placeholder="Text" onChange={handleSubmit} name="postText" required />
					</div>
					<div className="text-center">
						<button type="submit" className="btn btn-primary my-2">글 올리기</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddPostPage;