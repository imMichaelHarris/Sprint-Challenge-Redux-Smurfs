import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILED,
  ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAILED,
  DELETING_SMURFS_START,
  DELETING_SMURFS_SUCCESS,
  DELETING_SMUFS_FAILED,
  UPDATING_SMURF_START,
  UPDATING_SMURF_SUCCESS,
  UPDATING_SMURF_FAILED
} from "../actions";
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////////////////////////////   FETCHING SMURFS                                ///////////////////////////
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case FETCH_SMURFS_FAILED:
      return {
        ...state,
        fetchingSmurfs: false,
        error: `Couldn't fetch smurfs: ${action.payload}`
      };

    ///////////////////////////////////////////////////////////////////////////////////////////////        ADDING SMURFS                      ///////////////////////////////////
    case ADD_SMURFS_START:
      return {
        ...state,
        addingSmurf: true,
        error: null
      };
    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      };
    case ADD_SMURFS_FAILED:
      return {
        ...state,
        addingSmurf: false,
        error: `Couldn't add your smurf: ${action.payload}`
      };

    ////////////////////////////////////////////////////////////////////////////////////////////////           DELETING SMURFS                        /////////////////////////////////
    case DELETING_SMURFS_START:
      return {
        ...state,
        deletingSmurf: true,
        error: null
      };
    case DELETING_SMURFS_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload
      };
    case DELETING_SMUFS_FAILED:
      return {
        ...state,
        deletingSmurf: false,
        error: `Seems that smurf doesn't exist: ${action.payload}`
      };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
