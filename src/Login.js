import React from 'react';
import './Login.css'; // Importing a CSS file for styling
import cartIcon from './images/chevron-down.svg';

function Login({ color , onContinueClick }) {
  return (
    <div className="login-container">
      <h2 className='login'>Login or Signup</h2>
      <div className="input-container">
        <div className="country-code">
          +91 <img src={cartIcon} alt="Chevron Up" />
        </div>
        <input type="text" className="mobile-input" placeholder="Mobile number" />
      </div>
      <button className="continue-button" style={{ backgroundColor: color }} onClick={onContinueClick}>Continue</button>
      <p className="terms-text">
        By continuing, I agree to the <a href="/terms-of-use">Terms of Use</a> & <a href="/privacy-policy">Privacy Policy</a>
      </p>
    </div>
  );
}

export default Login;