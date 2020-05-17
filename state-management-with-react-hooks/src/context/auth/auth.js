import React, { useState } from "react";
import { createContext } from 'react';

export const AuthContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const AuthContextProvider = props => {
  var initAuthToken = null;
  var initName, initEmail = '';

  if (props.currentToken) {
    initAuthToken = props.currentToken;
    initName = props.currentToken.name;
    initEmail = props.currentToken.email;
  }

  const [authToken, setAuthToken] = useState(initAuthToken);
  const [name, setName] = useState(initName);
  const [email, setEmail] = useState(initEmail);



  return <AuthContext.Provider value={
    {
      authToken,
      name,
      email,
      login: (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthToken(data)
        setName(data.name);
        setEmail(data.email);
      },
      logout: () => {
        localStorage.removeItem("tokens");
        setAuthToken('');
        setName('');
        setEmail('');
      },
      setName: (name) => {
        setName(name);
      },
      setMail: (mail) => {
        setEmail(mail);
      }
    }}> {props.children}</AuthContext.Provider >;
};