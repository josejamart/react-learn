import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./context/auth/auth";

function PrivateRoute({ component: Component, ...rest }) {
    const { authToken } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props => {
                console.log("authToken")
                return authToken ? (
                    <Component {...props} />
                ) : (
                        <Redirect to="/login" />
                    )
            }
            }
        />
    );
}

export default PrivateRoute;