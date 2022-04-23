import React from 'react';

export default function SignUpPage() {
  return (
    <div className="sign-up-page">
      <h1>Sign Up for Free</h1>
      <form>
        <div className="row-horizontal">
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
        </div>
        <div className="row-vertical">
          <input type="email" placeholder="Email"></input>
        </div>
        <div className="row-vertical">
          <input type="password" placeholder="Password"></input>
        </div>
        <div className="row-vertical">
          <button type="button" className="button-block button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
