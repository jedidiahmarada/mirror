import { regisUser } from "../../service/userService";

export const isRegisStart = () => {
  return {
    type: "REGIS/START",
  };
};

export const isRegis = (
  fullname,
  username,
  email,
  password,
  profilebio,
  regisStat
) => {
  return {
    type: "REGIS",
    payload: {
      fullname,
      username,
      email,
      password,
      profilebio,
      regisStat,
    },
  };
};

export const isRegisError = (message) => {
  return {
    type: "REGIS/ERROR",
    payload: {
      message,
    },
  };
};

export const regisAsync = (
  full_name,
  username,
  email,
  password,
  profile_bio
) => {
  return (dispatch) => {
    dispatch(isRegisStart());

    regisUser(full_name, username, email, password, profile_bio)
      .then((response) => {
        console.log(response, "respon regis");

        const { code } = response;

        dispatch(
          isRegis(full_name, username, email, password, profile_bio, code)
        );
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(isRegisError(error.message));
      });
  };
};
