import { Input } from '@mui/material';

export default function Filter({filterName,setFilter}) {
    return(
        <div className="filter">
            <div>filter by {filterName}:</div>
            <Input 
                className="input"
                onChange={e => setFilter(e.target.value)}
            />
        </div>
    )
}