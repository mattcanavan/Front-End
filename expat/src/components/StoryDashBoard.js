import React, { useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

import StoryForm from './StoryForm';
import StoryList from './StoryList';



export default function StoryDashBoard(props) {
    const [posts, setPosts] = useState([]);
    const [update, setUpdate] = useState(false)

    useEffect(() =>{
        axiosWithAuth()
        .get('/api/posts')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => console.log("error DashBoard", err))
    }, [update])


    return(
        <div className='dash'>
            <StoryForm posts={posts} updatePosts={setPosts}
            setUpdating={setUpdate} updating={update}/>
            <StoryList posts={posts}/>
        </div>
    )
}