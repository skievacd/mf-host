
import React from 'react'
import { useState } from 'react';
const RemoteButton = React.lazy(() => import('remote/Button'));

function App() {

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prev => prev +1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <React.Suspense fallback="Loading Button...">
          <RemoteButton label={`Click me ${count}`} onClick={handleClick} />
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
