import React, { useState } from 'react';
import Welcome from './Welcome';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    // Wrapper centers everything vertically and horizontally
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Student Greeting App</h1>

        {/* Input Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Submit</button>
        </form>

        {/* Display personalized message */}
        {submitted && <Welcome name={name} />}
      </div>
    </div>
  );
};

// Styling for full-page centering
const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',          // full screen height
    width: '100vw',           // full screen width
    backgroundColor: '#f0f4ff',
  },
  container: {
    backgroundColor: '#363535ff',
    textAlign: 'center',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    width: '400px',
  },
  title: {
    color: '#9ff04eff',
    marginBottom: '25px',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    border: '2px solid #2196f3',
    borderRadius: '5px',
    width: '70%',
    marginRight: '10px',
  },
  button: {
    backgroundColor: '#2196f3',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;
