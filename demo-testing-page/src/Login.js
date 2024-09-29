import React, { useState } from 'react';
import './App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login validation
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      // Redirect or do something after successful login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="Login">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin} data-testid="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          data-testid="login-username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          data-testid="login-password"
        />
        <button type="submit" data-testid="login-submit">Login</button>
        {error && <p className="error" data-testid="login-error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
