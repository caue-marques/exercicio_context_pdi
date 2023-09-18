import { createContext, useContext, useEffect, useState } from 'react';
import Auth from '../interfaces/Auth';
import User from '../interfaces/User';

export const AuthContext = createContext({} as Auth)
export const useAutCtx = () => useContext(AuthContext);

//children type
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({} as User);
    const [signed, setSigned] = useState(false)

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user: User) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) {
                setUser(hasUser[0])
                setSigned(true)
            }
        }
    }, [user]);


    const signin = (userRequest: User) => {

        let msg: string = '';

        //tipagem e pq fazer ?? '{}'
        const usersStorage = JSON.parse(localStorage.getItem("users_db") ?? '{}');

        //tipagem
        const hasUser = usersStorage?.filter((user: User) => user.email === userRequest.email);

        if (hasUser?.length) {
            if (hasUser[0].email === userRequest.email && hasUser[0].password === userRequest.password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ token }));
                setUser(userRequest);
                setSigned(true);
                return msg;
            }
            msg = "Email e/ou senha incorretos"
            return msg

        }
        msg = "Email e/ou senha incorretos"
        return msg

    };

    const signup = (userRequest: User) => {

        let msg: string = '';

        //tipagem e pq fazer ?? '{}'
        const usersStorage = JSON.parse(localStorage.getItem("users_db") ?? '{}');

        //tipagem
        const hasUser = usersStorage?.filter((user: User) => user.email === userRequest.email);

        if (hasUser?.length) {
            msg = "Já tem uma conta com esse E-mail"
            return msg
        };

        //tipagem
        let newUser

        if (usersStorage) {
            newUser = [...usersStorage, userRequest];
        } else {
            newUser = [userRequest];
        }

        localStorage.setItem("users_db", JSON.stringify(newUser));
        return msg
    };

    const signout = () => {
        setUser({} as User);
        setSigned(false)
        localStorage.removeItem("user_token");
    };


    //useMemo()?
    return <AuthContext.Provider value={{ user, signed, signin, signup, signout }}>{children}</AuthContext.Provider>
}