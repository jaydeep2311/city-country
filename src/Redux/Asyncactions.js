import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQ = "FETCH_USERS_REQ";
const FETCH_USERS_FULLFILLED = "FETCH_USERS_FULLFILLED";
const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

const fetchusersrequest = () => {
  return {
    type: FETCH_USERS_REQ,
  };
};
const fetchuserssuccess = (users) => {
  return {
    type: FETCH_USERS_FULLFILLED,
    payload: users,
  };
};
const fetchusersfail = (error) => {
  return {
    type: FETCH_USERS_FAIL,
    payload: error,
  };
};
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchusersrequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchuserssuccess(users));
      })
      .catch((err) => {});
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_FULLFILLED:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        users: [],
      };

    default:
      break;
  }
};
const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(fetchUsers());
store.subscribe(() => console.log(store.getState()));
