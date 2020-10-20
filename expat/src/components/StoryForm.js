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
        .put(`api/posts/${storyToUpdate.id}`, storyToUpdate)
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
                    <li key={story.name} onClick={() => editStory(story)} className="edit-stories">
                        <span>
                            <span onClick={e => {
                                e.stopPropagation();
                                deleteStory(story)
                            }}>X</span>{""}{story.name}
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
                        onChange={e => 
                        setStoryToUpdate({...storyToUpdate,
                            name: e.target.value })
                        }
                        value={storyToUpdate.title}/>
                    </label>
                    <label>
                        Story:
                        <input
                        onChange={e => 
                        setStoryToUpdate({...storyToUpdate,
                            story: e.target.value })
                        }
                        value={storyToUpdate.description}/>
                    </label>
                    <label>
                        Image:
                        <input
                        onChange={e => 
                        setStoryToUpdate({...storyToUpdate,
                            image: e.target.value })
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
                        onChange={e => 
                        setStoryToUpdate({...formValues,
                            name: e.target.value })
                        }
                        value={formValues.title}/>
                    </label>
                    <label>
                        Story:
                        <input
                        onChange={e => 
                        setFormValues({...formValues,
                            story: e.target.value })
                        }
                        value={formValues.description}/>
                    </label>
                    <label>
                        Image:
                        <input
                        onChange={e => 
                        setFormValues({...formValues,
                            image: e.target.value })
                        }
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