import React, {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialValues = {
	comment: "",
};

export default function AddComment() {

    const {push} = useHistory();
    const params = useParams();
    const id = params.id;

    //STATE 
    const [formValues, setFormValues] = useState(initialValues);


    ///// HELPER FUNCTIONS

    //submitForm handler
    const commentHandler = (event) => {
        event.preventDefault();
        let username = localStorage.getItem('username');
		axiosWithAuth()
			.post(`/api/posts/${id}/comments`, { 
                comment: formValues.comment,
                username: username,
             })
			.then((response) => {
				push("/posts")
			})
			.catch((error) => {
				alert(`Error submiting comment: ${error.response.data.message}`);
			});
    };
    
    //onChange handler
    const onChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <form onSubmit={commentHandler}>
				<input
					type="text"
					name="comment"
					placeholder="add a comment.."
					value={formValues.comment}
					onChange={onChange}
				/>
				<button onClick={commentHandler}>add comment</button>
			</form>
        </div>
    )
}
