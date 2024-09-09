import React from 'react';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ padding: '20px', color: 'white' }}>
        <h1>Welcome to Note Swap!</h1>
        <p>This is where your main content will go.</p>
      </main>
    </div>
  );
}

export default App;
