// ✅ Full corrected version
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); // ✅ Inside component
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/welcome'); // 🔁 Redirect
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    alert(`Logged in with\nEmail: ${email}\nPassword: ${password}`);
    handleLogin(); // ✅ redirect after login
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '100px',
    textAlign: 'center',
  },
  form: {
    display: 'inline-block',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    display: 'block',
    padding: '10px',
    margin: '10px auto',
    width: '250px',
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default Login;
