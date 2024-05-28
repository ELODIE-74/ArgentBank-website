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

/*import {
  UPDATE_USER_PROFILE_START,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_ERROR,
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
    case UPDATE_USER_PROFILE_START:
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
    case UPDATE_USER_PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default updateprofilReducer;*/
/*.addCase(updateUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          ...state.user,
          username: action.payload.username,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
        };
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          status: action.payload.status,
          message: action.payload.message,
        };
      });
      
      */
