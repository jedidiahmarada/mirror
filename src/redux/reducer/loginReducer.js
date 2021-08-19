const initialState = {
  email: "",
  username: "",
  loginStat: "",
  loading: false,
  error: false,
  message: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        loginStat: action.payload.loginStat,
        loading: false,
      };

    case "LOGIN/START":
      return {
        ...state,
        loading: true,
      };

    case "LOGIN/ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default loginReducer;
