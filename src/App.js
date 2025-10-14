// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       hello jee
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import ReportsDashboard from './components/ReportsDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login validation
    setTimeout(() => {
      // For demo purposes, accept any non-empty credentials
      if (formData.username && formData.password) {
        setIsLoggedIn(true);
      }
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({ username: '', password: '' });
  };

  // Show Reports Dashboard if logged in, otherwise show Login
  if (isLoggedIn) {
    return <ReportsDashboard onLogout={handleLogout} />;
  }

  // Login Form (your existing code)
  return (
    <div className="app">
      <div className="login-container">
        <div className="login-card">
          <div className="header">
            <h1 className="title">Sadak Saathi</h1>
            <p className="subtitle">Admin Dashboard</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Username</label>
              <div className="input-container">
                <input
                  type="text"
                  name="username"
                  className="form-input"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-container">
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className={`login-button ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="footer">
            <p className="footer-text">Secure Admin Access</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;