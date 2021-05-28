import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function loginPage() {
  return (
    <div>
      <Navbar />
      <h1>Login Page</h1>
      <RouterLink to="/Register">Register Now!</RouterLink>
    </div>
  );
}
