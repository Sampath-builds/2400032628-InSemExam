import React from 'react';

// Functional component that takes name as prop
const Welcome = ({ name }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.text}>Welcome, {name}!</h2>
      <p style={styles.subtext}>We’re glad to have you on the Student Dashboard.</p>
    </div>
  );
};

// Inline CSS styling
const styles = {
  card: {
    backgroundColor: '#e3f2fd',
    border: '2px solid #2196f3',
    borderRadius: '12px',
    padding: '20px',
    marginTop: '20px',
    textAlign: 'center',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
    width: '350px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    color: '#0d47a1',
    fontSize: '24px',
  },
  subtext: {
    color: '#555',
  },
};

export default Welcome;
