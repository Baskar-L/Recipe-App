import React, { useEffect, useState } from 'react';
import api from '../../utils/api';


export default function UserList() {
    const [users, setUsers] = useState([]);


    const fetchUsers = async () => {
        try {
            const res = await api.get('/admin/users');
            setUsers(res.data);
        } catch (err) { console.error(err); }
    };


    useEffect(() => { fetchUsers(); }, []);


    return (
        <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Registered users</h2>
            <div className="space-y-2">
                {users.map(u => (
                    <div key={u._id} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                            <div className="font-medium">{u.name}</div>
                            <div className="text-sm text-gray-500">{u.email}</div>
                        </div>
                        <div className="text-sm text-gray-400">{u.role}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}