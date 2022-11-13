const INITIAL_STATE= {
    isLoading: false,
    posts: [],
    error: false,
};

const postReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "gettingPost":
            return {...state, isLoading: true };
        case "postReceived":
            return {...state, isLoading: false, posts: action.payload};
        case "error":
            return {...state, isLoading: false, error: action.payload};
        default: return state;
    }
}

export default postReducer