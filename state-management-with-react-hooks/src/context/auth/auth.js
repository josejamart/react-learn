import React from "react";
import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const initState = {
  authTokens: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ev":
      state.authTokens = action.payload
      return Object.assign({}, state)
    case "LOGIN_SUCCESS":
      localStorage.setItem("tokens", JSON.stringify(action.payload));
      state.authTokens = action.payload
      return Object.assign({}, state)
    case "LOGOUT":
      localStorage.removeItem("tokens");
      state.authTokens = null
      return Object.assign({}, state)
    default:
      return state;
  }
};



// Create a provider for components to consume and subscribe to changes
export const AuthContextProvider = props => {
  initState.authTokens = props.currentToken;
  const [state, dispatch] = useReducer(reducer, initState);

  return <AuthContext.Provider value={{ state, dispatch }}>{props.children}</AuthContext.Provider>;
};