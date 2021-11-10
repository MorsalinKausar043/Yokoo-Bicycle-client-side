import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user , isLoading } = useAuth();
    if (isLoading)
    {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-4 text-center">
                        <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <Route
                {...rest}
                render={({ location }) => user.email || user.displayName ? children :
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                        
                    />
                }
            />       
        </>
    );
};

export default PrivateRoute;