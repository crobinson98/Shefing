import React from 'react'
import Filter from './Filter';
import NewPostPopup from './NewPostPopup';


export default function PostsTopSection({setFilter,filter}) {

    return (
        <div className="top-section">
            <div className="title">Posts</div>
            <div className="right-section">
                <Filter
                    filterName={'post title'}
                    setFilter={setFilter}
                    filter={filter}
                />
                <NewPostPopup/>
            </div>
        </div>
    )
}