// reducers/updateprofilReducer.js
import {
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
} from "../actions/updateprofileAction";

const initialState = {
  isLoading: false,
  error: null,
  userInfo: {
    username: "",
    firstName: "",
    lastName: "",
  },
};
const updateprofilReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
      };
    case UPDATE_USER_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default updateprofilReducer;
