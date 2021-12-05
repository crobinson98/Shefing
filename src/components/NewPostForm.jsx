import React,{useState} from 'react'
import { Input, TextField } from '@mui/material'
import CustomButton from './CustomButton'

export default function NewPostForm({handleClose,handleNewPost}) {

    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');

    return (
        <div className="new-post-form">
            <div className="sub-title">Title</div>
            <Input
                multiline
                rows={1}
                onChange={e=>setTitle(e.target.value)}
                required
            />
            <div className="sub-title">Content</div>
           <TextField
                multiline
                rows={10}
                onChange={e=>setContent(e.target.value)}
                required
            />
            <div className="buttons">
                <CustomButton content={"Post"} handleClick={handleClose} width={'100px'}/>
                <CustomButton content={"Cancle"} handleClick={handleClose} width={'100px'}/>
            </div>
           
        </div>
    )
}
