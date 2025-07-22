import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
 const navigate = useNavigate();
 const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🎉 Welcome to Our App!</h1>
      <p>You're successfully logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
// hhh
export default Welcome;