import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import { AuthContextProvider, AuthContext } from "./context/auth/auth";
import Menubar from "./components/menubar"
import './App.css'

function App(props) {

  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  return (
    <AuthContextProvider currentToken={existingTokens}>
      <Router>
        <div>
          <AuthContext.Consumer>
            {({ name }) => {
              console.log("repinto name")
              return (
                <Menubar userName={name} />
              )
            }}
          </AuthContext.Consumer>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;