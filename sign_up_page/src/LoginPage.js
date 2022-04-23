import React from 'react';

export default function LoginPage() {
  return (
    <div className="login-page">
      <h1>Welcome Back!</h1>
      <form>
        <div className="row-vertical">
          <input type="email" placeholder="Email"></input>
        </div>

        <div className="row-vertical">
          <input type="password" placeholder="Password"></input>
        </div>

        <div className="forgot-pass">
          <a href="#">Forgot password ?</a>
        </div>
        <div className="row-vertical">
          <button type="button" className="button-block button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
