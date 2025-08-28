import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';


export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <AnimatePresence mode="wait">
                    <div className="min-h-screen bg-gray-50 py-8">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <AppRoutes />
                        </div>
                    </div>
                </AnimatePresence>
            </BrowserRouter>
        </AuthProvider>
    );
}