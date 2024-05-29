// reducers/updateprofilReducer.js
import {
  UPDATE_USER_PROFILE_START,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_ERROR,
} from "../actions/updateprofileAction";

const initialState = {
  loading: false,
  error: null,
  user: null,
};

const updateprofileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case UPDATE_USER_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default updateprofileReducer;
