import axios from "axios";

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
