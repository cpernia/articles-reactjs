import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
        return (
            <Route render={() => (
                props.authenticated ? (
                    <props.component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/signin',
                        state: { from: props.location }
                    }}/>
                )
            )}/>
        )
};

export default ProtectedRoute;