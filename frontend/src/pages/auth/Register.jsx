import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { motion } from 'framer-motion';


export default function Register() {
    const { register } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await register(name, email, password, role);
            if (user.role === 'admin') navigate('/admin');
            else navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md mx-auto bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Create account</h2>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full p-3 border rounded-md" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border rounded-md" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 border rounded-md" />


                <div>
                    <label className="text-sm">Role</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-3 border rounded-md mt-1">
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>


                <button className="w-full py-3 bg-green-600 text-white rounded-md">Create account</button>
            </form>
        </motion.div>
    );
}