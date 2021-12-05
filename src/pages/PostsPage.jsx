import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import Post from '../components/Post';
import PostsTopSection from '../components/postsTopSection';
import '../styles.css';

export default function PostsPage() {

    const {userId}=useParams();
    const [posts,setPosts]=useState([]);
    const [postsToRender,setPostsToRender]=useState([]);
    const [filter,setFilter]=useState('');
    const [noResults,setNoResults]=useState(false);


    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=> setPostsfunc(res.data))

        const timer = setTimeout(()=>setNoResults(posts.length ? false : true),500);
        return () => clearTimeout(timer);

    },[]);

    useEffect(() => {
        setPostsToRender(posts.filter(item=>item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())))
    }, [filter,posts])

    
    function setPostsfunc(posts){
        const newPosts=[];

        posts.filter(item => item.userId == userId)
        .map(item =>
            newPosts.push({
                    id: item.id,
                    title: item.title,
                    body: item.body
                })
        );
        setPosts(newPosts);
    }

    function handleNewPost(title,body){

        const newPost = {
            id:Math.random(),
            title,
            body
        }
        setPosts(prev=>[...prev,newPost])
    }

    return (
        <div className="posts-page">
            <PostsTopSection setFilter={setFilter} handleNewPost={handleNewPost}/>
                {postsToRender.map(item=>
                    <Post
                        key={item.id}
                        title={item.title}
                        body={item.body}
                    />
                )}
            <div className="no-results sub-title" style={{visibility: noResults ? 'visible':'hidden'}}>no results</div>
        </div>
    )
}
