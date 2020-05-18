import React from "react";
import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

export const initState = {
  authTokens: null,
  name: null,
  email: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("tokens", JSON.stringify(action.payload));
      return {
        ...state,
        authTokens: action.payload,
        name: action.payload.name,
        email: action.payload.email
      }
    case "LOGOUT":
      localStorage.removeItem("tokens");
      return {
        ...state,
        authTokens: null,
        name: null,
        email: null
      }
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