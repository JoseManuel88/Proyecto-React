import { API } from "../../shared/services/api";

export const loginUser = (formdata, navigate) => async(dispatch) =>{
    dispatch({type: 'login_user_start'});
    try {
        const result = await API.post('users/login', formdata)
        dispatch({ type: "login_user_ok", payload: result.data });
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('user', result.data.userDB.username);
        localStorage.setItem('userId', result.data.userDB._id);
        navigate('/');
    } catch (error) {
        dispatch({ type: "login_user_error", payload: error.message });
    }
}

export const logoutUser = (navigate) => async(dispatch) =>{
    dispatch({type: 'logout_user_start'});
    try {
        dispatch({type: 'logout_user_ok'});
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login')
    } catch (error) {
        dispatch({ type: "logout_user_error", payload: error.message });
    }
}

export const newUser = (formdata, navigate) => async(dispatch) =>{
    dispatch({type: 'register_user_start'});
    try {
        await API.post('users/create', formdata);
        dispatch({type: 'register_user_ok'});
        const result = await API.post('users/login', formdata)
        dispatch({ type: "login_user_ok", payload: result.data });
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('user', result.data.userDB.username);
        localStorage.setItem('userId', result.data.userDB._id);
        navigate('/');
        
    } catch (error) {
        dispatch({type: 'register_user_error',payload: error.message});
    }
}

export const checkSession = (token, navigate) => async(dispatch) =>{
    dispatch({type: 'checkSession_start'});
    try {
        const resultado = await API.post('users/checksession');
        dispatch({type: 'checkSession_ok', payload: {user: resultado.data, token:token}});
        localStorage.setItem('token', token);
        localStorage.setItem('userId', resultado.data._id);
    }catch(error){
        dispatch({type: 'checkSession_error'});
        localStorage.removeItem('token');
        navigate('/login');
    }
}
