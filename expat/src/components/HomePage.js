import React from 'react'

export default function HomePage() {
    return (
        <div className="homeContainer">
                <img alt='guy with thumbs up' className="sand" src = 'https://images.unsplash.com/photo-1533227935323-22ca46e5e899?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'></img>
                <div className="inner">
                    
                    <header className="major">
                        <h1>Expat Journal</h1>
                    </header>
                    <div className="content">
                        <p>As an Expat, I want to be able to show off the places I've been and remember them for myself. I have a lot of amazing pics and stories from around the world I'd like to share, but I need a site that is more personal than Instagram in order to do so.</p>
                    </div>
                </div>
        </div>
    )
}
