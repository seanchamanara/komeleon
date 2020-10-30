import  UserActionTypes  from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

///state=INITIAL_STATE is checking if param state exists, if not set to INITIAL_STATE value (currentUser: null)
const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
     
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case UserActionTypes.SIGN_IN_FAILURE:

            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
   
    }
};

export default userReducer;