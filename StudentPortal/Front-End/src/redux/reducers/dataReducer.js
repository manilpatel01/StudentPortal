import  { LOADING_DATA, SET_ADMIN_ERROR, SET_DATA_ADMIN, SET_DATA_STUDENT, SET_GLOBAL_ADMIN_LOADING, SET_GLOBAL_STUDENT_LOADING, SET_INITIALVALUE, SET_STUDENT_ERROR, STOP_GLOBAL_ADMIN_LOADING, STOP_GLOBAL_STUDENT_LOADING, STOP_LOADING_DATA} from '../type'

const initialState = {
    loading : false,
    students : [],
}

function dataReducer(state=initialState,action){
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading : true
            }
        case STOP_LOADING_DATA:
            return{
                ...state,
                loading : false
            }
        case SET_INITIALVALUE:
            return initialState        
        case SET_DATA_STUDENT:
            return{
                ...state,
                student:action.data
            }
        case SET_DATA_ADMIN:
            return{
                ...state,
                admin:action.data
            }
        case SET_GLOBAL_STUDENT_LOADING:
            return{
                ...state,
                studentLoading:true
            }
        case SET_GLOBAL_ADMIN_LOADING:
            return{
                ...state,
                adminLoading:true
            }
        case STOP_GLOBAL_STUDENT_LOADING:
            return{
                ...state,
                studentLoading:false
            }
        case STOP_GLOBAL_ADMIN_LOADING:
            return{
                ...state,
                adminLoading:false
            }
        case SET_ADMIN_ERROR:
            return {
                    ...state,
                    adminLoading: false,
                    adminErrors: action.payload
            }
        case SET_STUDENT_ERROR:
            return{
                ...state,
                studentLoading:false,
                studentErrors:action.payload
            } 
          
        default:
             return state

    }
}

export default dataReducer