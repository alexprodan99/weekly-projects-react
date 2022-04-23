import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import Tabs from './Tabs';

function App() {
  return (
    <div className="app">
      <Tabs>
        <div label="Sign Up">
          <SignUpPage />
        </div>
        <div label="Log In">
          <LoginPage />
        </div>
      </Tabs>
    </div>
  );
}

export default App;
