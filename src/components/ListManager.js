import React, { useState } from 'react';

const ListManager = ({ initialItems = [], placeholder = "Ajouter un élément" }) => {
  const [items, setItems] = useState(initialItems);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div style={styles.container}>
      <h2>📝 Gestionnaire de Liste</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Ajouter
        </button>
      </form>

      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>

      <p style={styles.count}>
        Total d'éléments : {items.length}
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '2px solid #2196F3',
    borderRadius: '10px',
    margin: '20px',
    backgroundColor: '#f9f9f9'
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  listItem: {
    padding: '10px',
    margin: '5px 0',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '5px'
  },
  count: {
    marginTop: '15px',
    fontWeight: 'bold',
    color: '#2196F3'
  }
};

export default ListManager;
