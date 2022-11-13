import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../redux/post/post.actions';
import "../../styles/Posts.scss";


const Post = () => {
    const dispatch = useDispatch();
    const {isLoading, posts, error} = useSelector((state)=>state.post)
    useEffect(()=>{
        dispatch(getPost())
    },[])
    return (  
    <div className='posts'>
     {isLoading && (
        <h1>Cargando posts...</h1>
     )
     }
     {posts && (
        
        posts.map((post)=>{
        
            {/* let postText = post.text.replace(/\n/g,"<br>"); */}
            return (
                <div className='post' key={post._id}>
                <h2>{post.title}</h2>
                <h3>{post.subtitle}</h3>
                <img src={post.img} alt={post.title} />
                <Link to={`/post/${post._id}`}>Ver detalles</Link>
                {/* <p dangerouslySetInnerHTML={{__html: postText}}/> */}
                </div>
            )
        })
     )}
    </div>
     
  )
}


export default Post