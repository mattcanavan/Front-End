import React from 'react';

export default function StoryCard({story}) {
    const {name, posts, imageURL, username} = story;

    return(
        <div className="card">
            <h2>This is {name}'s story!</h2>
            <h3>{posts}</h3>

        </div>
    )
}