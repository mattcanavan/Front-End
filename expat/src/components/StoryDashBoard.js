import React, { useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export default function StoryDashBoard(props) {
    const [posts, setPosts] = useState([]);
    const [update, setUpdate] = useState(false)

    useEffect(() =>{
        axiosWithAuth()
        .get('/api/posts')
        .then(res => {
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(err => console.log("error DashBoard", err))
    }, [])

    const deleteHandler = () => {
        axiosWithAuth()
          .delete(``)
          .then((res) => {
            debugger
          })
          .catch((err) => {
            console.log(err);
          });
      };

    const editHandler = (postId) => {
        console.log(postId)
    }

    return (
        <div className='parent'>
            {posts.map(singlePost => (
                <div className='container' key={singlePost.postId}>
                
                <div className='thumbnail'>
                    <img src={singlePost.imageURL} alt='' />
                </div>

                <div className='preview'> 
                    <h3>{singlePost.title}</h3>
                    <h5>{singlePost.description}</h5>
                </div>
                
                <button onClick={() => deleteHandler()}>Delete</button>
                <button onClick={() => editHandler(singlePost.postId)}>Edit</button>
                </div>
            )
            )}

        </div>
    )
}