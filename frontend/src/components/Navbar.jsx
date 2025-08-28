import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';


export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogout = () => {
        logout();
        navigate('/login');
    };


    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-sm sticky top-0 z-40"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-2xl font-bold text-green-600">Recipe</Link>
                        <Link to="/" className="hidden sm:inline text-gray-600">Home</Link>
                    </div>


                    <div className="flex items-center gap-4">
                        {user ? (
                            <>
                                {user.role === 'admin' ? (
                                    <Link to="/admin" className="px-3 py-2 rounded-md text-sm font-medium bg-green-50">Admin</Link>
                                ) : null}
                                <button onClick={handleLogout} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Login</Link>
                                <Link to="/register" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700">Sign up</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}