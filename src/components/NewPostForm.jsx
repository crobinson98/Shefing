import React, {useState,useContext} from 'react'
import { Input, TextField } from '@mui/material'
import CustomButton from './CustomButton'
import { NewPostContext } from '../pages/PostsPage';

export default function NewPostForm({handleClose}) {

    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const [noValidate,setNoValidate]=useState(false);
    const handleNewPost = useContext(NewPostContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        !noValidate && handleNewPost(title,content);
        handleClose();
    }

    return (
        <div >
            <form className="new-post-form"  style={{ padding:'5vh'}} onSubmit={handleSubmit} noValidate={noValidate}>
                <div className="sub-title">Title</div>
                <Input
                    multiline
                    rows={1}
                    onChange={e=>setTitle(e.target.value)}
                    value={title}
                    type="text"
                    required
                />
                <div className="sub-title">Content</div>
            <TextField
                    multiline
                    rows={10}
                    onChange={e=>setContent(e.target.value)}
                    value={content}
                    type="text"
                    required
                />
                <div className="buttons">
                    <CustomButton content={"Post"} 
                        handleClick={()=>handleSubmit} 
                        width={'100px'}
                    />
                    <CustomButton 
                        content={"Cancel"} 
                        handleClick={()=>{setNoValidate(true)}} 
                        width={'100px'}
                    />
                </div>
            </form>
        </div>
    )
}
