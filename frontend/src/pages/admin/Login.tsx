import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function loginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <RouterLink to="/Register">Register Now!</RouterLink>
    </div>
  );
}
