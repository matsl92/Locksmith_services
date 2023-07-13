import { useState, useContext, createContext } from 'react';
import axios from 'axios';

// require('dotenv').config();

const authContext = createContext({});

export function ProvideAuth({ children }: any) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            { children }
        </authContext.Provider>
    )
}

export function useAuth() {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const backendBaseURL = process.env.BACKEND_BASE_URL;

    async function signIn(username: string, password: string) {
        setIsLoading(true);
        try {
            const response = await axios.post(
                `${backendBaseURL}/login`,
                {
                    username,
                    password
                }
            )
            const data = await response.data;
            console.log(data);
            localStorage.setItem('token', data.token);
            setUser(data.user)
        } catch (err:any) {
            console.log(err.message);
            setErrors(err.errors);
        }
        setIsLoading(false)
    }

    async function signUp(signUpData: {}) {
        setIsLoading(true);
        try {
            const response = await axios.post(
                `${backendBaseURL}/register`,
                signUpData
            )
            const data = await response.data
        } catch (err: any) {
            console.log(err.message);
            setErrors(err.errors);
        }
        setIsLoading(true);
    }

    async function signOut() {
        setIsLoading(true);
        try {
            const response = await axios.delete(
                backendBaseURL,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            localStorage.removeItem('token');
        } catch (err: any) {
            console.log(err.message);
            setErrors(err.errors);
        }
        setIsLoading(false);
    }

    return {
        user,
        errors,
        isLoading,
        signIn,
        signOut,
        signUp
    }
}