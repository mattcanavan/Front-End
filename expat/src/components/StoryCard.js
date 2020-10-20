import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function StoryCard({story}) {
    const {name, posts, title, description, imageURL, username} = story;

    const getPosts = () => {
        axiosWithAuth()
        .get(`api/posts`)
        .then(res => {
            console.log(res)
            const adventures = res.data 
        })
        .catch(err => console.log('Post error', err))
    }
    getPosts();

    return(
        <div className="card">
            <h2>This is {title}'s story!</h2>
            <h3>{description}</h3>
            <img src={imageURL} alt=" adventure photo "></img>
            

        </div>
    )
}