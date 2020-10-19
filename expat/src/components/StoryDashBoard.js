import React, { useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';



export default function StoryDashBoard(props) {
    const [stories, setStories] = useState([]);
    const [update, setUpdate] = useState(false)

    useEffect(() =>{
        axiosWithAuth()
        .get()
        .then()
        .catch(err => console.log("error DashBoard", err))
    }, [update])


    return(
        <div className='dash'>
            
        </div>
    )
}