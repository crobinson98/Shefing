import React from 'react'
import Filter from './Filter';


export default function TopSection({setNameFilter,setEmailFilter}) {

    return (
        <div className="top-section">
            <div className="title">Table</div>
            <div className="right-section">
                {['name','email'].map(filter=>
                   <Filter
                        key={filter}
                        filterName={filter}
                        setFilter={filter==='name'? setNameFilter : setEmailFilter}
                   />
                )}
            </div>
        </div>
    )
}
