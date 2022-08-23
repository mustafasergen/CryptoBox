import React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { Auth, AuthRef, User } from './AuthProvider';




export interface PrivateRouteProps {
    node: React.ReactNode
    redirect?: string
}

function PrivateRoute(props: PrivateRouteProps) {

    const auth: User | undefined = Auth.getUser();

    if (auth?.role == 'parent') {
        return <Navigate to={props.redirect || '/'} replace={true} />
    }
    return <>{props.node}</>
};

export default PrivateRoute;