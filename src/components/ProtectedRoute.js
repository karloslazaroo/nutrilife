import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AdminPage from "./AdminPage/AdminPage";
import MainLayout from "./MainLayout/MainLayout";


const ProtectedRoute = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
        <div>
        <AdminPage/>
      </div>
    )
  } else {
    return (
        <div>
        <MainLayout>
        <p>Please log in to view the admin page.</p>
        <button onClick={() => loginWithRedirect()}>Log In</button></MainLayout>
      </div>
            
    
    )
  }

};

export default ProtectedRoute;