import React from 'react';
import './AdminPage.css';
import MainLayout from "../MainLayout/MainLayout";
import { useAuth0 } from '@auth0/auth0-react';

function AdminPage() {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <MainLayout>

      <button onClick={logout}>Logout</button>
   
    </MainLayout>
  )
}

export default AdminPage