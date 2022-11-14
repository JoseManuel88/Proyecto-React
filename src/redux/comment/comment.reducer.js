const INITIAL_STATE= {
    isLoading: false,
    comments: [],
    error: false
};

const commentReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "gettingComment":
            return {...INITIAL_STATE, isLoading: true };
        case "commentReceived":
            return {...state, isLoading: false, comments: action.payload};
        case "error":
            return {...state, isLoading: false, error: action.payload};
        default: return state;
    }
}

export default commentReducer