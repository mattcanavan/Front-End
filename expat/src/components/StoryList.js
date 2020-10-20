import React from 'react';

import StoryCard from './StoryCard'

export default function StoryList({posts}) {
    return(
        <div className="card-container">
            {posts.map(story => (
                <StoryCard key={story.id} story={story}/>
            ))}
        </div>
    )
}