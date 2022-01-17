import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../Firebase/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const {user, loading} = useAuth();
    if(loading){
        return ('loading...')
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email? (
                    children
                ) : (
                    <Navigate
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;