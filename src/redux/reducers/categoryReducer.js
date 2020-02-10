const categoryReducer = (state={}, {type,payload}) => {
    switch(type){

        case "CREATE_CATEGORY":
            return {...state, payload};

        default:
            return state;   
    }
}

export default categoryReducer;