import React, { useState } from 'react';
import { Interweave } from 'interweave';

function App() {
  const [input, setInput] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Interweave Input Test</h2>
      <textarea
        rows="6"
        style={{ width: '100%', fontSize: '16px' }}
        placeholder="Type or paste HTML/payload to test here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Rendered Output:</h3>
      <div style={{ border: '1px solid #ccc', padding: '1rem', minHeight: '100px' }}>
        <Interweave content={input} />
      </div>
    </div>
  );
}

export default App;
