import React, { useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from "styled-components";
// styled components
 const kf = keyframes`
//  50% {
//   transform: scale(0.8);
// }
   100% {
    opacity: 100;
    transform: scale(1);
  } 
 `; 
const StyledForm = styled.div`
  opacity: 100;
  transform: scale(2);
  animation: ${kf} .5s forwards;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(3)
  }
  button {
    transition: all 0.2s ease-in-out;
    &:hover {
      transition: all 0.8s ease-in-out;
      transform: scale(1.3)
    }
    .cardContainer .cardText .title .parentOfCardGrid {
    transition: all 0.8s ease-in-out;
    &:hover {
      transition: all 0.8s ease-in-out;
      transform: scale(2)
    }
    
  }
  a {
    transition: all 0.8s ease-in-out;
    &:hover {
      transition: all 0.8s ease-in-out;
    }
  }
`;

export default function StoryDashBoard(props) {
    
    
    const { push } = useHistory();
    
    //STATE
    const [comments, setComments] = useState([]);
    const [posts, setPosts] = useState();
    const [update, setUpdate] = useState(false);

    //GET posts
    useEffect(() =>{
        axiosWithAuth()
        .get('/api/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => console.log("GET error", err))
    }, [update])

    //GET comments
    useEffect(() =>{
        axiosWithAuth()
        .get('/api/posts/comments')
        .then(res => {
            setComments(res.data)
        })
        .catch(err => console.log("GET error", err))
    }, [posts])

    //DELETE post
    const deleteHandler = (postId) => {
        axiosWithAuth()
          .delete(`api/posts/${postId}`)
          .then((res) => {
            setUpdate(!update) //changes update state so above side-effect renders.
          })
          .catch((err) => {
            console.log('delete error:', err);
          });
      };

    //EDIT post
    const editHandler = (postId) => {
        push(`/posts/edit/${postId}`)
    }

    //ADD comment
    const commentHandler = (postId) => {
        push(`/posts/comment/${postId}`)
    }


    if (!posts) {
        return <h1>Loading from database...</h1>
    }

    return (<StyledForm>
        <div className='parentOfCardGrid'>
            {posts.map(singlePost => (
                <div className='cardContainer' key={singlePost.postId}>
                
                <div className='thumbnail'>
                    <img src={singlePost.imageURL} alt='' />
                </div>

                <div className='cardText'> 
                    <h1 className="title">{singlePost.title}</h1>
                    <h3>Story by: {singlePost.username}</h3>
                    <h5 className="description">User Story: {singlePost.description}</h5>
                </div>

                <div className="buttonContainer">
                <button className="button" onClick={() => commentHandler(singlePost.postId)}>Add Comment</button>
                <button className="button" onClick={() => deleteHandler(singlePost.postId)}>Delete</button>
                <button className="button" onClick={() => editHandler(singlePost.postId)}>Edit</button>
                </div>

                <div className='commentSection'> Comment Section
                    {comments.map( singleComment => {
                        if(singleComment.postId === singlePost.postId){
                            return (
                            <div className="commentsContainer" key={singleComment.commentId}>
                                <h5 className="username">{singleComment.username}:&nbsp;</h5>
                                <h5 className="comment">{singleComment.comment}</h5>
                            </div>)
                        }
                    })}
                </div>
                </div>
            )
            )}

        </div>
    </StyledForm>
        
    )
}