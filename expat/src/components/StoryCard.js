import React from 'react';

export default function StoryCard({story}) {
    const {name, story} = story;

    return(
        <div className="card">
            <h2>This is {name}'s story!</h2>
            <h3>{story}</h3>

        </div>
    )
}