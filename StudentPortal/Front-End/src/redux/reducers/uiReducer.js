import { SET_ERRORS, LOADING_UI, CLEAR_ERRORS, STOP_LOADING_UI, SET_OPERATION_SUCCESS } from '../type'

const initialState = {
    loading: false,
    success: false,
    successMessage:{},
    errors: {}
}

function uiReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        case LOADING_UI:
            return {
                ...state,
                loading: true,
            }

        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false
            }
        case CLEAR_ERRORS:
            return initialState
        case SET_OPERATION_SUCCESS:
            return {
                ...state,
                successMessage : action.payload,
                loading: false,
                success: true
            }
        default:
            return state

    }
}
export default uiReducer