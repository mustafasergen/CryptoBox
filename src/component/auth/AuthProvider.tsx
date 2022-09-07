import React, { MutableRefObject } from "react";
import { createContext, ReactNode, useState } from "react";

export interface User {
    name: string;
    address: string;
    role: 'Parent' | 'Child';
}
export interface AuthContextType {
    getUser: () => User | undefined;
    signIn: (user: User, cb: () => void) => void;
    signOut: (cb: () => void) => void;
}

export const AuthContext = createContext<AuthContextType>({
    getUser: () => undefined,
    signIn: (user: User, cd: () => void) => { },
    signOut: (cb: () => void) => { }
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<undefined | User>(undefined);
    const getUser = () => {
        if (user)
            return user;

        const userStorage = localStorage.getItem('user')
        if (userStorage != undefined && userStorage != '') {
            const user: User = JSON.parse(userStorage);
            signIn(user, () => {
                console.log("sign in işlemi bitti.")
            })
        }
        return user;
    }
    const signIn = (user: User, cb: () => void) => {
        //TODO: bu user kontrat ile bağlayacağım
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
        cb();
    };
    const signOut = (cb: () => void) => {

    };

    return <AuthContext.Provider value={{
        getUser,
        signIn,
        signOut,
    }} >
        <>
        {children}
        </>
    </AuthContext.Provider>;

};

export const useAuth = () => {
    const { getUser, signIn, signOut } = React.useContext(AuthContext);

    const auth = {
        getUser: getUser,
        signIn: signIn,
        signOut: signOut
    }

    return auth;
}

export type IAuthService = ReturnType<typeof useAuth>;

export const AuthRef = React.createRef<IAuthService>() as MutableRefObject<IAuthService>;

export const Auth: IAuthService = {
    getUser: () => AuthRef.current?.getUser(),
    signIn: (user, cb) => AuthRef.current?.signIn(user, cb),
    signOut: (cb) => AuthRef.current?.signOut(cb)
};


export default AuthProvider;