import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILED = "FETCH_SMURFS_FAILED";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({type: FETCH_SMURFS_FAILED, payload: err.response})
    })
};
//////// ADDING SMURFS                                                  /////////////////////////////////////////////////////////////////

export const ADD_SMURFS_START = "ADD_SMURFS_START"
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS"
export const ADD_SMURFS_FAILED = "ADD_SMURFS_FAILED"

export const addSmurfToDb = newSmurf => dispatch => {
  dispatch({type: ADD_SMURFS_START})
  axios.post('http://localhost:3333/smurfs', newSmurf)
  .then(res => {
    dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data})
  })
  .catch(err => {
    dispatch({type: ADD_SMURFS_FAILED, payload: err.response})
  })
}

////////////    DELETING SMURFS                                   /////////////////////////////////////////////////////////////////////////////////

export const DELETING_SMURFS_START = "DELETING_SMURFS_START"
export const DELETING_SMURFS_SUCCESS = "DELETING_SMURFS_SUCCESS"
export const DELETING_SMUFS_FAILED = "DELETEING_SMURFS_FAILED"