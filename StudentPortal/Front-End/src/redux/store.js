import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import UserReducer from "./reducers/UserReducer";
import uiReducer from "./reducers/uiReducer";
import dataReducer from "./reducers/dataReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  User: UserReducer,
  UI: uiReducer,
  Data: dataReducer,
  form: formReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : x => x
  )
);

export default store;
