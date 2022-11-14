const INITIAL_STATE= {
    isLoading: false,
    error: false,
};

    const newPostReducer = (state= INITIAL_STATE, action) => {
        switch(action.type){
            case "creatingPost":
                return {...INITIAL_STATE, isLoading: true};
            case "postCreated":
                return {...INITIAL_STATE};
            case "error":
                return {...INITIAL_STATE, isLoading: false, error: action.payload};
            default: return state;
        }
    }

export default newPostReducer