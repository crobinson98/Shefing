import { Input } from '@mui/material';

export default function Filter({filterName,setFilter,filter=null}) {
    return(
        <div className="filter">
            <div>filter by {filterName}:</div>
            <Input 
                className="input"
                onChange={e => setFilter(e.target.value)}
                value={filter}
            />
        </div>
    )
}