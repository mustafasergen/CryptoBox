import React, { useEffect, useState } from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { WalletService } from '../../services/wallet-service';
import { Auth, AuthRef, User } from './AuthProvider';




export interface PrivateRouteProps {
    node: React.ReactNode
    redirect?: string
}

function PrivateRoute(props: PrivateRouteProps) {

    const auth: User | undefined = Auth.getUser();


     const [roles, setRoles] = useState('');
    useEffect(() => {
        WalletService.connect().then(() => {
          WalletService.contract.getRole().then((role: string) => {
            if (role == "Parent") {
                setRoles(role);
            } else if (role == "Child") {
                setRoles(role);
            }
          });
        });
      }, []);

    if (auth?.role == roles) {
        return <Navigate to={props.redirect || '/'} replace={true} />
    }
    return <>{props.node}</>
};

export default PrivateRoute;