import { loginUser } from "../../service/userService";

export const isLoginStart = () => {
  return {
    type: "LOGIN/START",
  };
};

export const isLogin = (username, email, loginStat) => {
  return {
    type: "LOGIN",
    payload: {
      username,
      email,
      loginStat,
    },
  };
};

export const isLoginError = (message) => {
  return {
    type: "LOGIN/ERROR",
    payload: {
      message,
    },
  };
};

export const loginAsync = (username, email, password) => {
  return (dispatch) => {
    dispatch(isLoginStart());

    loginUser(username, email, password)
      .then((response) => {
        console.log(response, "respons login");
        const { code } = response;

        dispatch(isLogin(username, email, code));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(isLoginError(error.message));
      });
  };
};
