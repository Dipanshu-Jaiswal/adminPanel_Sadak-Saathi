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



// import React, { useState } from 'react';
// import './App.css';
// import ReportsDashboard from './components/ReportsDashboard';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     // Simulate login validation
//     setTimeout(() => {
//       // For demo purposes, accept any non-empty credentials
//       if (formData.username && formData.password) {
//         setIsLoggedIn(true);
//       }
//       setLoading(false);
//     }, 1500);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setFormData({ username: '', password: '' });
//   };

//   // Show Reports Dashboard if logged in, otherwise show Login
//   if (isLoggedIn) {
//     return <ReportsDashboard onLogout={handleLogout} />;
//   }

//   // Login Form (your existing code)
//   return (
//     <div className="app">
//       <div className="login-container">
//         <div className="login-card">
//           <div className="header">
//             <h1 className="title">Sadak Saathi</h1>
//             <p className="subtitle">Admin Dashboard</p>
//           </div>

//           <form className="login-form" onSubmit={handleLogin}>
//             <div className="form-group">
//               <label className="form-label">Username</label>
//               <div className="input-container">
//                 <input
//                   type="text"
//                   name="username"
//                   className="form-input"
//                   placeholder="Enter your username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label className="form-label">Password</label>
//               <div className="input-container">
//                 <input
//                   type="password"
//                   name="password"
//                   className="form-input"
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <button 
//               type="submit" 
//               className={`login-button ${loading ? 'loading' : ''}`}
//               disabled={loading}
//             >
//               {loading ? 'Logging in...' : 'Login'}
//             </button>
//           </form>

//           <div className="footer">
//             <p className="footer-text">Secure Admin Access</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react';
import './App.css';
import ReportsDashboard from './components/ReportsDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true); // Toggle between login/signup
  const [loading, setLoading] = useState(false);
  
  // Login form state
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  // Signup form state
  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    department: '',
    phone: ''
  });

  // Handle login form changes
  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  // Handle signup form changes
  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login validation
    setTimeout(() => {
      // For demo purposes, accept any non-empty credentials
      if (loginData.username && loginData.password) {
        setIsLoggedIn(true);
      }
      setLoading(false);
    }, 1500);
  };

  // Handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords don't match!");
      setLoading(false);
      return;
    }

    // Simulate signup process
    setTimeout(() => {
      console.log('Signup data:', signupData);
      // For demo, automatically switch to login after successful signup
      setIsLoginForm(true);
      alert('Account created successfully! Please login.');
      setLoading(false);
      
      // Reset signup form
      setSignupData({
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        department: '',
        phone: ''
      });
    }, 1500);
  };

  // Toggle between login and signup
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ username: '', password: '' });
  };

  // Show Reports Dashboard if logged in
  if (isLoggedIn) {
    return <ReportsDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="app">
      <div className="login-container">
        <div className="login-card">
          {/* Header */}
          <div className="header">
            <h1 className="title">Sadak Saathi</h1>
            <p className="subtitle">Admin Dashboard</p>
            <div className="form-toggle">
              <button 
                className={`toggle-btn ${isLoginForm ? 'active' : ''}`}
                onClick={() => setIsLoginForm(true)}
              >
                Login
              </button>
              <button 
                className={`toggle-btn ${!isLoginForm ? 'active' : ''}`}
                onClick={() => setIsLoginForm(false)}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Login Form */}
          {isLoginForm ? (
            <form className="auth-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label">Username</label>
                <div className="input-container">
                  <input
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Enter your username"
                    value={loginData.username}
                    onChange={handleLoginChange}
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
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#forgot" className="forgot-password">Forgot Password?</a>
              </div>

              <button 
                type="submit" 
                className={`auth-button ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>

              <div className="auth-footer">
                <p>Don't have an account? <span className="auth-link" onClick={toggleForm}>Sign up here</span></p>
              </div>
            </form>
          ) : (
            /* Signup Form */
            <form className="auth-form" onSubmit={handleSignup}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div className="input-container">
                  <input
                    type="text"
                    name="fullName"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={signupData.fullName}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Username</label>
                <div className="input-container">
                  <input
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Choose a username"
                    value={signupData.username}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <div className="input-container">
                    <input
                      type="password"
                      name="password"
                      className="form-input"
                      placeholder="Create password"
                      value={signupData.password}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <div className="input-container">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-input"
                      placeholder="Confirm password"
                      value={signupData.confirmPassword}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Department</label>
                  <div className="input-container">
                    <select
                      name="department"
                      className="form-input"
                      value={signupData.department}
                      onChange={handleSignupChange}
                      required
                    >
                      <option value="">Select Department</option>
                      <option value="zonal">Zonal Department</option>
                      <option value="admin">Admin Department</option>
                      <option value="supervisor">Supervisor</option>
                      <option value="engineer">Civil Engineer</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <div className="input-container">
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      placeholder="Enter phone number"
                      value={signupData.phone}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-options">
                <label className="terms-agreement">
                  <input type="checkbox" required />
                  I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
                </label>
              </div>

              <button 
                type="submit" 
                className={`auth-button ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>

              <div className="auth-footer">
                <p>Already have an account? <span className="auth-link" onClick={toggleForm}>Sign in here</span></p>
              </div>
            </form>
          )}

          {/* Footer */}
          <div className="footer">
            <p className="footer-text">Secure Admin Access • Sadak Saathi © 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;