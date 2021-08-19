const initialState = {
  fullname: "",
  username: "",
  email: "",
  password: "",
  profilebio: "",
  regisStat: "",
  loading: false,
  error: false,
  message: "",
};

const registersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGIS":
      return {
        ...state,
        fullname: action.payload.fullname,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        profilebio: action.payload.profilebio,
        loading: false,
      };

    case "REGIS/START":
      return {
        ...state,
        loading: true,
      };

    case "REGIS/ERROR":
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

export default registersReducer;
