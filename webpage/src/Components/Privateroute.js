import React from 'react'
import { Navigate } from 'react-router-dom';

const Private = ({ children, isLogedIn }) => {
    if (isLogedIn) {
        return children;
    }
    else {
        return <Navigate to="/signin" />;
    }
}

export default Private