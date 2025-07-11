"use client"

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "../../auth/auth-context/AuthContext";


const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/auth/auth2/login');
        }
    }, [loading, user, router]);

    if (loading) {
        return <div>Loading...</div>; // Optional: Add a spinner or placeholder here
    }
    
    return user ? children : null;
};

export default ProtectedRoute;