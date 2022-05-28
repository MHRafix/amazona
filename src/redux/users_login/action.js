export const storeUserInfo = {
  SET_USER_INFO: "SET_USER_INFO",
};

export const setUserInfo = (info) => {
  return { type: storeUserInfo.SET_USER_INFO, payload: info };
};
