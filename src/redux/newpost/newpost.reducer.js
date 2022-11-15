const INITIAL_STATE= {
    isLoading: false,
    postCreated: false,
    error: false
};

    const newPostReducer = (state= INITIAL_STATE, action) => {
        switch(action.type){
            case "creatingPost":
                return {...state, isLoading: true};
            case "postCreated":
                return {...INITIAL_STATE, postCreated: true};
            case "error":
                return {...INITIAL_STATE, error: action.payload};
            default: return state;
        }
    }

export default newPostReducer