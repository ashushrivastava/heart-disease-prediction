import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Heart Disease Prediction</h1>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <SignedIn>
                <h2>Welcome to Heart Disease Prediction</h2>
                <p>Application is being set up...</p>
              </SignedIn>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
