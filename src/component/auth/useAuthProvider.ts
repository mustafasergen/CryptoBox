import { useState } from "react";
import fakeAuth from "./fakeAuth";



export interface User{
    name:string;
    address:string;
    role:'parent' | 'children';
    
}
export interface IUseAuthProvider{
    user: User | null;
    signIn: (user:User,cb: () => void) => void;
    signOut:(cb: () => void) => void;

}

const useAuthProvider = (): IUseAuthProvider => {
    const[user, setUser] = useState<null | User > (null);

    const signIn = (user:User, cb: () => void ) => {
        //TODO: bu user kontrat ile bağlayacağım
        setUser(user)
        localStorage.setItem('user',JSON.stringify(user))
    };
    const signOut = (cb: () => void ) => {
        fakeAuth.signOut(() =>{
            setUser(null);
        });
    };

    return{
        user,
        signIn,
        signOut,
    };
    
};

export default useAuthProvider;