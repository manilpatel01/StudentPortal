import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER, SET_ADMIN,
  CHANGE_SIGN_OR_PHOTO,
  LOGOUT,
  
} from "../type";

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
};
function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;

    case SET_USER:
      return {
        loading: false,
        authenticated: true,
        credentials: { ...action.payload },
      };
      case SET_ADMIN:
      return {
        loading: false,
        authenticated: true,
        credentials: { ...action.payload },
        dashboard:{...action.dashboard}
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_SIGN_OR_PHOTO:

      const fieldname = action.fieldname
      
      return {
        ...state,
        credentials : {
          ...state.credentials,
          [fieldname] : action.payload
        }
      }
    case LOGOUT:
      return initialState
    default:
      return state;
  }
}

export default UserReducer;
