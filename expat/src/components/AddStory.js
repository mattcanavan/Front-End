import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const initialFormValues = {
    title: "",
    description: "",
    imageURL: "",
    username: "",
};

export default function AddStory() {
    
    const {push} = useHistory();

    //STATE
    const [formValues, setFormValues] = useState(initialFormValues);


    ///// HELPER FUNCTIONS

    //formSubmit handler
    const formSubmit = (event) => {
        event.preventDefault();
        let username = localStorage.getItem('username');
		axiosWithAuth()
			.post("api/posts", {
				title: formValues.title,
				description: formValues.description,
				imageURL: formValues.imageURL,
				username: username,
			})
			.then((response) => {
				push("/posts");
			})
			.catch((error) => {
				alert(`Oops.. Looks like there was an error. ${error.response.data.message}`);
			});
    };
    
    //onChange handler
    const inputChange = (event) => {
		event.persist();
		setFormValues({ ...formValues, [event.target.name]: event.target.value });
	};
    return (
		<div className='content'>
        <div id="maxform">
            <form onSubmit={formSubmit}>
				<div>
				<h2>Add New Post</h2>
				</div>
				<label htmlFor="title">
					{" "}
					Title:&nbsp;
					<input
						type="text"
						name="title"
						value={formValues.title}
						placeholder="Title"
						onChange={inputChange}
					/>
				</label>
			<div>
				<label htmlFor="description">
					<textarea
						type="text"
						name="description"
						value={formValues.description}
						placeholder="description..."
						onChange={inputChange}
					/>
				</label>
				</div>
				<label htmlFor="imageURL">
					{" "}
					Image:&nbsp;
					<input
						type="text"
						name="imageURL"
						value={formValues.imageURL}
						placeholder="Enter URL of image"
						onChange={inputChange}
					/>
				</label>

				<br />
				
				{formValues.imageURL !== null && formValues.imageURL !== "" ? (
					<img alt={formValues.title} src={`${formValues.imageURL}`} />
				) : null}
				<br />
				
				<button className='buttonPostClass' type="submit" to="/posts">
					Post
				</button>
				
			</form>
        </div>
		</div>
    )
}
