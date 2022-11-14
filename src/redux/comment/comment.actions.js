import axios from "axios";
import { API } from "../../shared/services/api";

export const getIndividualComment = (ids) => async(dispatch)=> {
    dispatch({type:'gettingComment'})
    
        try {
            const comments = []
            for(let i = 0; i < ids.length; i++){
            const comment = await axios.get('https://proyecto-final-react-seven.vercel.app/comments/'+ids[i])
                comments.push(comment.data)
            }
            dispatch({type:'commentReceived', payload: comments})
        } catch (error) {
            
        }
    
}
export const postNewComment = (formData) => async(dispatch)=>{
    dispatch({type:'newComment'})
    console.log(formData);
    try {
        const res= await API.post("comments/create", formData)
        console.log(res)
    } catch (error) {
        
    }
}
