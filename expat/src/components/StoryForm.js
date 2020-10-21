import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialStory = {
    title: '',
    description: '',
    imageURL: '',
    username: ''
}

export default function StoryForm({posts, updatePosts, updating, setUpdating, username}) {
    const [storyToUpdate, setStoryToUpdate] = useState(initialStory);
    const [formValues, setFormValues] = useState(initialStory)
    // const [story, addStory] =useState(initialStory)

    const editStory = story => {
        setUpdating(true);
        setStoryToUpdate(story);
    }

    const onChange = e => {
        e.persist();
        // validateChange(e);
        setFormValues({...formValues, [e.target.name]: e.target.name})
    }

    const addStory = e => {
        e.preventDefault();
        axiosWithAuth()
        .post(`api/posts/`,
        {title: formValues.title,
        description: formValues.description,
        imageURL: formValues.imageURL,
        username: username}
         )

        .then(res =>{
            addStory([res.data, ...posts])
            setFormValues(initialStory)
            addStory()
            console.log(res.data)
            // history.push()
        })
        
        .catch(err => console.log("Error adding post", err))
    }

    const saveUpdate = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`api/posts/${storyToUpdate.id}`,
        {title: formValues.title,
            description: formValues.description,
            imageURL: formValues.imageURL,
            username: username} )
        .then(res =>{
            setUpdating(false)
        })
        .catch(err => console.log('error updating', err.response))
    }

    const deleteStory = post => {
        axiosWithAuth()
        .delete(`/api/posts/${storyToUpdate.id}`, storyToUpdate)
        .then(res => {
            updatePosts(posts.filter(item=> item.id !== post.id))
            setUpdating(false)
        })
        .catch(err => console.log('error deleting', err.response))
    }

    return (
        <div className="stories-list">
            <ul className="organized">
                {posts.map(story =>(
                    <li key={story.title} onClick={() => editStory(story)} className="edit-stories">
                        <span>
                            <span onClick={e => {
                                e.stopPropagation();
                                deleteStory(story)
                            }}>X</span>{""}{story.title}
                        </span>
                    </li>
                ))}
            </ul>
            { updating && (
                <form onSubmit={saveUpdate}>
                    <legend>Update Story</legend>
                    <label>
                        Name:
                        <input
                        onChange={onChange
                        }
                        value={storyToUpdate.title}/>
                    </label>
                    <label>
                        Story:
                        <input
                        onChange={onChange
                        }
                        value={storyToUpdate.description}/>
                    </label>
                    <label>
                        Image:
                        <input
                        onChange={onChange
                        }
                        value={storyToUpdate.imageURL}/>
                    </label>
                    <div>
                        <button type="submit">Update</button>
                        <button onClick={() => setUpdating(false)}>Cancel</button>
                    </div>
                </form>
            )}
            <div className="add story">
            <form onSubmit={saveUpdate}>
                    <legend>Add Story</legend>
                    <label>
                        Name:
                        <input
                        name="title"
                        type="text"
                        onChange={onChange
                        }
                        value={formValues.title}/>
                    </label>
                    <label>
                        Story:
                        <input
                        onChange={onChange
                        }
                        value={formValues.description}/>
                    </label>
                    <label>
                        Image:
                        <input
                        onChange={onChange}
                        
                        value={formValues.imageURL}/>
                    </label>
                    <div>
                        <button type="submit">Add Story</button>
                        <button onClick={() => setUpdating(false)}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}