import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function Dashboard() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/admin/recipes" className="p-6 bg-white rounded-2xl shadow hover:scale-102 transition-transform">
                    <h3 className="font-semibold">Manage Recipes</h3>
                    <p className="text-sm text-gray-500 mt-2">Create, update and delete recipes.</p>
                </Link>


                <Link to="/admin/users" className="p-6 bg-white rounded-2xl shadow hover:scale-102 transition-transform">
                    <h3 className="font-semibold">Users</h3>
                    <p className="text-sm text-gray-500 mt-2">View registered users.</p>
                </Link>
            </div>
        </motion.div>
    );
}