import { CLEAR_ERRORS, LOADING_UI, SET_ADMIN_ERROR, SET_DATA_ADMIN, SET_DATA_STUDENT, SET_ERRORS, SET_GLOBAL_ADMIN_LOADING, SET_GLOBAL_STUDENT_LOADING, SET_INITIALVALUE, SET_OPERATION_SUCCESS, SET_STUDENT_ERROR, STOP_GLOBAL_ADMIN_LOADING, STOP_GLOBAL_STUDENT_LOADING, STOP_LOADING_UI } from "../type";
import axios from 'axios'
import { getUserData } from "./userAction";


export const getGlobalStudent = (enrollment) =>async (dispatch) => {
  console.log(" getGlobalStudent")
  
  dispatch({ type: SET_INITIALVALUE });
  dispatch({ type: SET_GLOBAL_STUDENT_LOADING });
  axios.get(`/api/admin/request/student?enrollment=${enrollment}`)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: SET_DATA_STUDENT,
        data: res.data.student
      })
      dispatch({ type: STOP_GLOBAL_STUDENT_LOADING });
    })
    .catch(err => {
      console.error(err.response.data)
      dispatch({
        type: SET_STUDENT_ERROR,
        payload: err.response.data
      })
      dispatch({type:STOP_GLOBAL_STUDENT_LOADING})
    })

}

export const getGlobalAdmin = (email) => (dispatch) => {
  dispatch({ type: SET_INITIALVALUE });
  dispatch({ type: SET_GLOBAL_ADMIN_LOADING });
  axios.get(`/api/admin/sshead/searchAdmin?email=${email}`)
    .then(res => {   
      dispatch({
        type: SET_DATA_ADMIN,
        data: res.data.admin
      })
      dispatch({ type: STOP_GLOBAL_ADMIN_LOADING });
    })
    .catch(err => {
      console.error(err.response.data)
      dispatch({
        type: SET_ADMIN_ERROR,
        payload: err.response.data
      })
      dispatch({type:STOP_GLOBAL_ADMIN_LOADING})
    })

} 

export const updateGLobalAdmin = (formData)  => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: LOADING_UI });
  const config = {
    header: { "content-type": "multipart/form-data" },
  };
  axios
    .post("/api/admin/sshead/updateAdmin", formData, config)
    .then((res) => {
      dispatch(getUserData("ADMIN"));
      dispatch({ type: SET_OPERATION_SUCCESS, payload: res.data.message });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.message,
      });
    });
}