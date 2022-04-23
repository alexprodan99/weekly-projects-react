import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import Tabs from './Tabs';

function App() {
  return (
    <div className="app">
      <Tabs>
        <div label="SIGN IN">
          <SignUpPage />
        </div>
        <div label="LOG IN">
          <LoginPage />
        </div>
      </Tabs>
    </div>
  );
}

export default App;
