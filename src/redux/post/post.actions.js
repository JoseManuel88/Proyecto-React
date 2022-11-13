import axios from "axios";

export const getPost = () => async(dispatch)=> {
    dispatch({type:'gettingPost'})
    try {
        const posts = await axios.get('https://proyecto-final-react-seven.vercel.app/posts')
        dispatch({type:'postReceived', payload: posts.data})
    } catch (error) {
        
    }
}
