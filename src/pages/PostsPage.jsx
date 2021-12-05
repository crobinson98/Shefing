import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import Post from '../components/Post';
import PostsTopSection from '../components/postsTopSection';
import '../styles.css';

export const NewPostContext = React.createContext();

export default function PostsPage() {

    const {userId}=useParams();
    const [posts,setPosts]=useState([]);
    const [postsToRender,setPostsToRender]=useState([]);
    const [filter,setFilter]=useState('');

    useEffect(()=>{

        const newPosts=[];

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.data.filter(item => item.userId === Number(userId))
        .map(item =>
            newPosts.push({
                    id: item.id,
                    title: item.title,
                    body: item.body
                })
        ))
        .then(()=>setPosts(newPosts));

    },[userId]);

    useEffect(() => {

       setPostsToRender(posts.filter(item=>item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())));

    }, [filter,posts])

    function handleNewPost(title,body){

        const newPost = {
            id:Math.random(),
            title,
            body
        }
        setPosts(prev=>[...prev,newPost]);
        setFilter('');
    }

    return (
        <NewPostContext.Provider value={handleNewPost}>
            <div className="posts-page">
                <PostsTopSection setFilter={setFilter} filter={filter}/>
                    {postsToRender.map(item=>
                        <Post
                            key={item.id}
                            title={item.title}
                            body={item.body}
                        />
                    )}
            </div>
        </NewPostContext.Provider>
    )
}
