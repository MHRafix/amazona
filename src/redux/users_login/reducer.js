import { storeUserInfo } from "./action";

const initialState = {
  user_info: {},
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case storeUserInfo.SET_USER_INFO: {
      const loggedUser = [...state.userInfo, payload];
      return { ...state, user_info: loggedUser };
    }
    default:
      return state;
  }
}
