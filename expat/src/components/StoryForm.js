import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialStory = {
    name: '',
    story: '',
    image: ''
}

export default function StoryForm({stories, updateStories, updating, setUpdating}) {
    const [storyToUpdate, setStoryToUpdate] = useState(initialStory);

    const editStory = story => {
        setUpdating(true);
        setStoryToUpdate(story);
    }

    const saveUpdate = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`api/stories/${storyToUpdate.id}`, storyToUpdate)
        .then(res =>{
            setUpdating(false)
        })
        .catch(err => console.log('error updating', err.response))
    }

    const deleteStory = story => {
        axiosWithAuth()
        .delete(`api/stories/${storyToUpdate.id}`, storyToUpdate)
        .then(res => {
            updateStories(stories.filter(item=> item.id !== story.id))
            setUpdating(false)
        })
        .catch(err => console.log('error deleting', err.response))
    }

    return (
        <div className="stories-list">
            <ul className="organized">
                {stories.map(story =>(
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
                        value={storyToUpdate.name}/>
                    </label>
                    <label>
                        Story:
                        <input
                        onChange={e => 
                        setStoryToUpdate({...storyToUpdate,
                            story: e.target.value })
                        }
                        value={storyToUpdate.story}/>
                    </label>
                    <label>
                        Image:
                        <input
                        onChange={e => 
                        setStoryToUpdate({...storyToUpdate,
                            image: e.target.value })
                        }
                        value={storyToUpdate.image}/>
                    </label>
                    <div>
                        <button type="submit">Update</button>
                        <button onClick={() => setUpdating(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </div>
    )
}