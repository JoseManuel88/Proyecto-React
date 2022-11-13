import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import postReducer from "./post/post.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
