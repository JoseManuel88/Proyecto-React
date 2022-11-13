import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../redux/post/post.actions';



const Post = () => {
    const dispatch = useDispatch();
    const {isLoading, posts, error} = useSelector((state)=>state.posts)
    useEffect(()=>{
        dispatch(getPost())
    },[])
    return (  
    <div>
        {posts.map((post)=>{})}
    </div>
     
  )
}


export default Post