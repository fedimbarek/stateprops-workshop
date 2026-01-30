import React, { useState } from 'react';

const Counter = ({ initialCount = 0, step = 1 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  return (
    <div style={styles.container}>
      <h2>🔢 Compteur</h2>
      <div style={styles.display}>
        <h1>{count}</h1>
      </div>
      <div style={styles.buttons}>
        <button onClick={decrement} style={styles.button}>
          - {step}
        </button>
        <button onClick={increment} style={styles.button}>
          + {step}
        </button>
      </div>
      <p style={styles.info}>
        Valeur initiale : {initialCount} | Pas : {step}
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '2px solid #4CAF50',
    borderRadius: '10px',
    margin: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  },
  display: {
    fontSize: '24px',
    margin: '20px 0',
    color: '#333'
  },
  buttons: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center'
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'transform 0.1s'
  },
  info: {
    marginTop: '15px',
    color: '#666',
    fontSize: '14px'
  }
};

export default Counter;
