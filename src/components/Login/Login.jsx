import React from 'react';
import './Login.css';
import MainLayout from "../MainLayout/MainLayout";

function Login() {
  return (
    <MainLayout>
    <div className='body'>
        <div class="login-page">
  <div class="form">
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      
    </form>
  </div>
</div>
    </div>
    </MainLayout>
  )
}

export default Login