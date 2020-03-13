
const INITIAL_STATE = {
    currentUser: null
}

///state=INITIAL_STATE is checking if param state exists, if not set to INITIAL_STATE value (currentUser: null)
const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }

}

export default userReducer;