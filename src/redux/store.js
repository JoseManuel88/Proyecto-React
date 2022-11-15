import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import commentReducer from "./comment/comment.reducer";
import newPostReducer from "./newpost/newpost.reducer";
import postReducer from "./post/post.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    comment: commentReducer,
    newPost: newPostReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;