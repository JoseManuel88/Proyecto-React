import { API2 } from "../../shared/services/api"


export const createPost = (formData, navigate) => async (dispatch) => {
    dispatch({ type: 'creatingPost' })
    try {
        const post = await API2.post('posts/create', formData);
        console.log(post)
        dispatch({type: 'postCreated'})
        navigate(`/post/${post.data._id}`);
    } catch (error) {
        console.log(error);
        dispatch({ type: 'error', payload: error })
    }
}
