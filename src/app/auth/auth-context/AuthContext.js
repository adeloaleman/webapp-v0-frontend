"use client";  // This indicate that this file should be treated as a client-side component. So it will run in the browser rather than on the server.



// A hook in React is a special function that allows you to "hook into" React's features and lifecycle methods from functional components. Before hooks were introduced in React 16.8, managing state and side effects in React components required using class components. Hooks provide a way to use state and other React features without writing a class.
import { createContext } from "react";        // createContext hook: Used to create a context object, which can be used to share data between components without needing to pass props through every level of the component tree. Context is a mechanism for passing global-like data (e.g., theme, user info, authentication status) to multiple components without needing to pass props manually at each level of the component tree.
                                              // Context vs. Props: Context replaces props when data needs to be accessed by multiple components, especially deeply nested ones. Instead of passing data through props at every level, Context allows direct access wherever needed.
import { useState } from "react";             // useState hook: it allows you to add state to functional components in React. It returns an array with two elements: the current state value and a function to update that state.
import axios from "axios";                    // axios is a popular HTTP client used to make requests to APIs
import { useRouter } from "next/navigation";  // useRouter hook: it provides access to Next.js's router instance, which you can use to programmatically navigate between pages, access route parameters, and more.

import { useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {   // This is creating a functional component named AuthProvider. It uses an arrow function and is exported so it can be imported and used in other parts of the application.
                                                  // children is a special prop in React that represents the child elements or components nested inside AuthProvider. This allows AuthProvider to wrap other components and provide them with context or state.
    
    // This way we are actually defining two variables (array destructuring) using the useState hook
    const [user, setUser] = useState(null);       // `user` is the state variable that holds the current user’s information. Initially, it is set to null, indicating that there is no user logged in.
                                                  // `setUser` is the function used to update the user state. When called, it will update the user variable with the new value.
    const [loading, setLoading] = useState(true); // State to indicate if the app is checking authentication status     
    const router = useRouter();
    
    // Fetch user data on app initialization
    useEffect(() => {
        const initializeAuth = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    // Reapply token for future requests
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                    // Optionally decode token to get user data (if it's a JWT)
                    const userData = { token }; // Minimal example, replace with decoding if needed
                    setUser(userData);
                }
            } catch (error) {
                console.error("Error restoring authentication:", error);
                setUser(null); // Reset user on error
            } finally {
                setLoading(false); // Finished checking auth
            }
        };

        initializeAuth();
    }, []);

    const login = async (email, password) => {
        try {
            const formData = new FormData();
            formData.append('username', email);       // Here we need to use "username" because the api was created with username and not with email 
            formData.append('password', password);
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/token`, formData, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            });
            const token = response.data.access_token;
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;  // Once the server responds, the function extracts the access_token from the response data and sets it as a default Authorization header for all future axios requests. This allows the application to include the token in subsequent API requests for authenticated actions.
            localStorage.setItem("token", token);  // The access_token is also stored in the browser's localStorage under the key 'token'. This ensures that the token persists across browser sessions, allowing the user to remain logged in.
            setUser({ token });                    // The function assumes there is a setUser function available, which is called with the response data to update the application's state with the logged-in user's information.
            router.push('/');                      // The user is redirected to the home page ('/')
        } catch (error) {
            console.log('Login Failed:', error);
        }
    };

    const logout = () => {
        setUser(null);
        delete axios.defaults.headers.common['Authorization'];
        localStorage.removeItem("token");
        router.push('/auth/auth2/login')
    };

    // AuthContext.Provider is a special component provided by the Context API. It allows the AuthProvider component to pass down values (user, login, logout) to any child components that need them. These values will be accessible to any component that consumes this context.
    // The value prop of the AuthContext.Provider component is an object containing the values that you want to make available to the consuming components.
    // By including {children} inside the AuthContext.Provider, you're essentially allowing the AuthProvider to wrap around other components, providing them with the user, login, and logout values.
    return (
        <AuthContext.Provider value={{ user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

// The line export default AuthContext; is used to export the AuthContext object as the default export from the module, allowing it to be imported and used in other parts of the application.
// When a module has a default export, you can import it in other files using any name you choose without needing to use curly braces {}.
// So, you can import AuthContext in other parts of your application like this:
// import AuthContext from './path-to-your-auth-context-file';
// Since it's a default export, you can also import it with any name:
// import MyAuthContext from './path-to-your-auth-context-file';

// If AuthContext was not exported as a default export, the export would look like this:
// export const AuthContext = createContext();  // which is called a Named Export
// When importing, you must use the exact name of the exported variable, enclosed in curly braces {}:
// import { AuthContext } from './path-to-your-auth-context-file';
// If you had multiple named exports in the same file, you could import them all at once:
// import { AuthContext, AuthProvider } from './path-to-your-auth-context-file';


// In general, AuthProvider is used to wrap your application's components to make the context available to them.
// It injects the values (user, login, logout) into the AuthContext.Provider, making them accessible to all components nested within the AuthProvider.

// It is also importan to export AuthContext because it can be used by other components that need to consume the context data provided by AuthProvider.
// To access the context values, components will import AuthContext and use the useContext hook.
// Example:
// import { useContext } from 'react';
// import { AuthContext } from './path-to-your-auth-context-file';
// function SomeComponent() {
//     const { user, login, logout } = useContext(AuthContext);
//     # Now you can use `user`