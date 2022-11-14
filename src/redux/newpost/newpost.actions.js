import { API } from "../../shared/services/api"


export const createPost = (formData) =>async(dispatch)=>{
    dispatch({type:'creatingPost'})
    try {
        const post = await API.post('posts/create', formData);
        console.log(post);
        dispatch({type: 'postCreated'})
    } catch (error) {
        dispatch({type: 'error', payload:error})
    }
}