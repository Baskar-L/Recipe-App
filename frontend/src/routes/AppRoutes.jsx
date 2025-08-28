// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from '../pages/auth/Login';
// import Register from '../pages/auth/Register';
// import RecipeList from '../pages/user/RecipeList';
// import RecipeDetails from '../pages/user/RecipeDetails';
// import Dashboard from '../pages/admin/Dashboard';
// import ManageRecipes from '../pages/admin/ManageRecipes';
// import UserList from '../pages/admin/UserList';
// import ProtectedRoute from '../components/ProtectedRoute';


// export default function AppRoutes() {
//     return (
//         <Routes>
//             <Route path="/" element={<RecipeList />} />


//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />


//             <Route path="/recipes/:id" element={<RecipeDetails />} />


//             <Route path="/admin" element={<ProtectedRoute role={'admin'}><Dashboard /></ProtectedRoute>} />
//             <Route path="/admin/recipes" element={<ProtectedRoute role={'admin'}><ManageRecipes /></ProtectedRoute>} />
//             <Route path="/admin/users" element={<ProtectedRoute role={'admin'}><UserList /></ProtectedRoute>} />


//             <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//     );
// }




import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RecipeList from "../pages/user/RecipeList";
import RecipeDetails from "../pages/user/RecipeDetails";
import Dashboard from "../pages/admin/Dashboard";
import ManageRecipes from "../pages/admin/ManageRecipes";
import UserList from "../pages/admin/UserList";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<RecipeList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />

      {/* Admin Protected Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/recipes"
        element={
          <ProtectedRoute role="admin">
            <ManageRecipes />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <ProtectedRoute role="admin">
            <UserList />
          </ProtectedRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
