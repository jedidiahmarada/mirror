export const loginUser = async (username, email, password) => {
  const url = "https://mirror-application.herokuapp.com/mirror/login";
  const data = {
    username,
    email,
    password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const regisUser = async (
  fulll_name,
  username,
  email,
  password,
  profile_bio
) => {
  const url = "https://mirror-application.herokuapp.com/mirror/register";
  const data = {
    fulll_name,
    username,
    email,
    password,
    profile_bio,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
