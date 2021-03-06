import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";
export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";
export const UPDATE_FRIEND = "UPDATE_FRIEND";
export const UPDATE_FRIEND_SUCCESS = "UPDATE_FRIEND_SUCCESS";
export const UPDATE_FRIEND_FAILURE = "UPDATE_FRIEND_FAILURE";

const server = `http://localhost:5000/api/friends`;

export const fetchingFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get(server)
    .then(response => {
      dispatch({
        type: FETCHING_FRIENDS_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: FETCHING_FRIENDS_FAILURE,
        payload: error
      });
    });
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND });
  axios
    .post(server, friend)
    .then(response => {
      dispatch({
        type: ADD_FRIEND_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_FRIEND_FAILURE,
        payload: error
      });
    });
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND });
  axios
    .delete(`${server}/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_FRIEND_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: DELETE_FRIEND_FAILURE,
        payload: error
      });
    });
};

export const updateFriend = friend => dispatch => {
  dispatch({ type: UPDATE_FRIEND });
  axios
    .put(`${server}/${friend.id}`)
    .then(response => {
      dispatch({
        type: UPDATE_FRIEND_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_FRIEND_FAILURE,
        payload: error
      });
    });
};
