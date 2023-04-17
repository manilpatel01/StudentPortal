import {
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_AUTHENTICATED,
  SET_USER,
  LOADING_UI,
  SET_ADMIN,
  STOP_LOADING_UI,
  SET_OPERATION_SUCCESS,
  LOGOUT,
} from "../type";
import axios from "axios";
import { APIENDPOINTS } from "../api_endpoint";

export const loginUser = (userData, history) => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: LOADING_UI });
  axios
    .post(APIENDPOINTS.authentication(), userData)
    .then((res) => {
      dispatch(setAuthorization(res.data.jwt, res.data.domain));
      saveToken(res.data.jwt, res.data.domain);
      dispatch({ type: STOP_LOADING_UI });
      if (res.data.domain === "STUDENT") {
        history.push("/student");
      } else {
        history.push("/admin");
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getUserData = (domain) => (dispatch) => {
  let url;
  if (domain === "STUDENT") {
    url = APIENDPOINTS.studentCredentials();
    axios
      .get(url)
      .then((res) => {
        dispatch({
          type: SET_USER,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SET_ERRORS,
          payload: err,
        });
      });
  } else {
    url = APIENDPOINTS.adminCredentials();
    axios.get(url).then((res) => {
      axios
        .get(APIENDPOINTS.adminDashBord())
        .then((dashboard) => {
          console.log(dashboard.data);
          dispatch({
            type: SET_ADMIN,
            payload: res.data,
            dashboard: dashboard.data,
          });
        })
        .catch((err) => console.log(err));
    });
  }
};

export const RegisterStudent = (formData, history) => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
  dispatch({ type: LOADING_UI });
  const config = {
    header: { "content-type": "multipart/form-data" },
  };
  axios
    .post(APIENDPOINTS.studentRegistration(), formData, config)
    .then((res) => {
      dispatch({ type: SET_OPERATION_SUCCESS, payload: res.data });
      setTimeout(() => {
        history.push("/login");
      }, 1000)

    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const updateStudent = (formData) => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: LOADING_UI });
  const config = {
    header: { "content-type": "multipart/form-data" },
  };
  axios
    .post(APIENDPOINTS.studentUpdation(), formData, config)
    .then((res) => {
      dispatch(getUserData("STUDENT"));
      dispatch({ type: SET_OPERATION_SUCCESS, payload: "success" });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const RegisterAdmin = (formData, history) => (dispatch) => {
  dispatch({
    type : CLEAR_ERRORS
  })
  dispatch({ type: LOADING_UI });
  const config = {
    header: { "content-type": "multipart/form-data" },
  };
  axios
    .post(APIENDPOINTS.adminRegistration(), formData, config)
    .then((res) => {
      dispatch({ type: SET_OPERATION_SUCCESS, payload: res.data });
      setTimeout(() => {
        history.push("/login");
      },1000)
      
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const changePhotoOrSign = (values, domain) => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
  const formData = new FormData();
  let url;
  let key;
  if (values["sign"]) {
    key = "sign";
    formData.append(key, values[key], values[key].name);
    url = APIENDPOINTS.updateSign(domain)
  } else {
    key = "photo";
    formData.append(key, values[key], values[key].name);
    url = APIENDPOINTS.updatePhoto(domain)
  }

  const config = {
    header: { "content-type": "multipart/form-data" },
  };
  axios
    .post( url, formData, config)
    .then(async (res) => {
      if (domain === "/student") {
        dispatch(getUserData("STUDENT"));
      } else {
        dispatch(getUserData("ADMIN"));
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const changePassword = (formData, domain) => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: LOADING_UI });
  const config = {
    header: { "content-type": "multipart/form-data" },
  };
  axios
    .post(APIENDPOINTS.changePassword(domain), formData, config)
    .then((res) => {
      dispatch({ type: SET_OPERATION_SUCCESS, payload: "success" });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const requestCertificate = (type, formData, history) => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: LOADING_UI });

  const config = {
    header: { "content-type": "multipart/form-data" },
  };
  const url =
    type === "feerefund"
      ? APIENDPOINTS.requestFeeRefund()
      : APIENDPOINTS.requestCertificate(type)
  axios
    .post(url, formData, config)
    .then((res) => {
      dispatch({ type: SET_OPERATION_SUCCESS, payload: "Success" });
      dispatch(getUserData("STUDENT"));
      dispatch({ type: CLEAR_ERRORS });
      history.push("/student");
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const forgotPasswordAction = (formData) => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: LOADING_UI });
  console.log(formData);
  const config = {
    header: { "content-type": "multipart/form-data" },
  };
  axios
    .post(APIENDPOINTS.forgetPassword(), formData, config)
    .then((res) => {
      dispatch({ type: SET_OPERATION_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const logout = () => (dispatch) => {
  removeHeader();
  removeToken();
  dispatch({
    type: LOGOUT,
  });
};

export const setAuthorization = (token, domain) => (dispatch) => {
  dispatch({ type: SET_AUTHENTICATED });

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.headers.common["Domain"] = domain;

  dispatch(getUserData(domain));
};

const saveToken = (token, domain) => {
  localStorage.setItem("token", token);
  localStorage.setItem("domain", domain);
};

const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("domain");
};

const removeHeader = () => {
  axios.defaults.headers.common["Authorization"] &&
    delete axios.defaults.headers.common["Authorization"];
  axios.defaults.headers.common["Domain"] &&
    delete axios.defaults.headers.common["Domain"];
}
// const getTokenFromStorage = () => {
//   return 
// }
