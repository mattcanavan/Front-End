import React from 'react';

import StoryCard from './StoryCard'

export default function StoryList({stories}) {
    return(
        <div className="card-container">
            {stories.map(story => (
                <StoryCard key={story.id} story={story}/>
            ))}
        </div>
    )
}