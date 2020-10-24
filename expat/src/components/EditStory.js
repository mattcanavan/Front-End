import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const initialPostValues = {
    title: "",
    categoryId: "",
    description: "",
    imageURL: "",
};

export default function EditStory() {

    const {push} = useHistory();
    const params = useParams();
    const id = params.id;

    //STATE
    const [post, setPost] = useState(initialPostValues);;

    ///// HELPER FUNCTIONS

    //GET single post
      useEffect(() =>{
        axiosWithAuth()
        .get(`/api/posts/${id}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => console.log("GET error", err))
    }, [])

    //onChange handler
    const onChange = (event) => {
		// event.preventDefault();
		setPost({ ...post, [event.target.name]: event.target.value });
    };
    
    //formSubmit handler
    const formSubmit = (event) => {
		event.preventDefault();
		axiosWithAuth()
			.put(`/api/posts/${id}`, {
				title: post.title,
				description: post.description,
				imageURL: post.imageURL,
			})
			.then((response) => {
				push(`/posts`);
			})
			.catch((error) => {
				alert(`Oops.. Looks like there was an error. ${error.response.data.message}`);
			});
	};

    return (
        <form onSubmit={formSubmit}>
				<h2>Edit Story</h2>
				<label htmlFor="title">
					{" "}
					Title:&nbsp;
					<input
						type="text"
						name="title"
						value={post.title}
						placeholder="Title"
						onChange={onChange}
					/>
				</label>

				<label htmlFor="description">
					<textarea
						type="text"
						name="description"
						value={post.description}
						placeholder="description..."
						onChange={onChange}
					/>
				</label>

				<label htmlFor="imageURL">
					{" "}
					Image:&nbsp;
					<input
						type="text"
						name="imageURL"
						value={post.imageURL}
						placeholder="Enter URL of image"
						onChange={onChange}
					/>
				</label>
				<br />
				
				<br />
				{post.imageURL !== null && post.imageURL !== "" ? (
					<img alt={post.title} src={`${post.imageURL}`} />
				) : null}
				<br />
				<button type="submit" to="/posts">
					Update
				</button>
			</form>
    )
}
