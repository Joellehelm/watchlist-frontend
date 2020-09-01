import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from './Home';

function ProtectedRoute({ children, ...rest }) {
    return (
        <Home
          {...rest}
          render={({ location }) =>
            localStorage.getItem('token') ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
}



export default ProtectedRoute;
