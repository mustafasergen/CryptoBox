import React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';




export interface PrivateRouteProps {
    node: React.ReactNode
    redirect?: string
}

function PrivateRoute(props: PrivateRouteProps) {
    const navigate = useNavigate();
    const auth = useAuth();
    
    if (auth?.user == null) {
        return<Navigate to={props.redirect || '/'} replace={true} />
    }
    return <>{props.node}</>
};

export default PrivateRoute;