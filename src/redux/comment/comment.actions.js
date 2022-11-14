import axios from "axios";
import { API } from "../../shared/services/api";


export const getComments = (ids) => async(dispatch)=> {
    dispatch({type:'gettingComment'})
    
        try {
            const comments = []
            for(let i = 0; i < ids.length; i++){
            const comment = await axios.get('https://proyecto-final-react-seven.vercel.app/comments/'+ids[i])
                comments.push(comment.data)
            }
            dispatch({type:'commentReceived', payload: comments})
        } catch (error) {
            dispatch({type:'error', payload: error})
        }
    
}
export const postNewComment = (formData) => async(dispatch)=>{
    dispatch({type:'newComment'})
    try {
        const res = await API.post("comments/create/"+formData.postId, formData)
        console.log(res)
        const post = await axios.get('https://proyecto-final-react-seven.vercel.app/posts/'+formData.postId)
        const comments = post.data.comments
        dispatch(getComments(comments))
    } catch (error) {
        dispatch({type:'error', payload: error})
    }
}
