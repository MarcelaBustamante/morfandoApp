export const initialState = {
    username: "",
    password: "",
    isLoading: false,
    error: "",
    isLoggedIn: false
  };
  
  export function loginReducer(state = initialState, action) {
    switch (action.type) {
      case "login":
        return {
          ...state,
          isLoading: true
        };
      case "success":
        return {
          ...state,
          isLoggedIn: true
        };
      case "failure":
        return {
          ...state,
          error: "Incorrect username or password!",
          isLoading: false
        };
      case "logout":
        return initialState;
      case "fieldUpdate":
        return {
          ...state,
          [action.field]: action.value
        };
      default:
        return state;
    }
  }