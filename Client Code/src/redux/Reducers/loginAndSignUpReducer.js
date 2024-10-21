const loginOrSignUp = (state = "", action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.payload.jwtToken;
    case "LOGIN_FAILURE":
      return ""; // Clear token on login failure
    case "SIGNUP_SUCCESS":
      return action.payload.jwtToken;
    case "SIGNUP_FAILURE":
      return ""; // Clear token on signup failure
    case "UserDetails_Success":
      return action.payload;
    case "UserDetails_Failure":
      return ""; // Clear token on Login failure
    default:
      return state;
  }
};

export default loginOrSignUp;
