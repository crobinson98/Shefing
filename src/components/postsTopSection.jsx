import React from 'react'
import Filter from './Filter';
import NewPostPopup from './NewPostPopup';


export default function PostsTopSection({setFilter,handleNewPost}) {

    return (
        <div className="top-section">
            <div className="title">Posts</div>
            <div className="right-section">
                <Filter
                    filterName={'post title'}
                    setFilter={setFilter}
                />
                <NewPostPopup HandleNewPost={handleNewPost}/>
            </div>
        </div>
    )
}