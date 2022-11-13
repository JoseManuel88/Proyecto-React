import axios from "axios";

export const getPosts = () => async(dispatch)=> {
    dispatch({type:'gettingPost'})
    try {
        const posts = await axios.get('https://proyecto-final-react-seven.vercel.app/posts')
        dispatch({type:'postsReceived', payload: posts.data})
    } catch (error) {
        
    }
}

export const getIndividualPost = (id) => async(dispatch)=> {
    dispatch({type:'gettingPost'})
    try {
        const post = await axios.get('https://proyecto-final-react-seven.vercel.app/posts/'+id)
        const text = post.data?.text?.replace(/\n/g,"<br>")
        post.data.text = text
        dispatch({type:'individualPostReceived', payload: post.data})
    } catch (error) {
        
    }
}
