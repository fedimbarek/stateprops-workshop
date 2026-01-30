import React, { useState } from 'react';

const GradeManager = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = parseFloat(inputValue);

    if (isNaN(note)) {
      setError('Veuillez entrer un nombre valide');
      return;
    }

    if (note < 0 || note > 20) {
      setError('La note doit être entre 0 et 20');
      return;
    }

    setNotes([...notes, note]);
    setInputValue('');
    setError('');
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return (sum / notes.length).toFixed(2);
  };

  return (
    <div style={styles.container}>
      <h2>📊 Gestionnaire de Notes</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Entrer une note (0-20)"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Ajouter
        </button>
      </form>

      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.notesContainer}>
        {notes.length === 0 ? (
          <p style={styles.empty}>Aucune note ajoutée</p>
        ) : (
          notes.map((note, index) => (
            <div key={index} style={styles.noteItem}>
              <span style={styles.noteValue}>{note.toFixed(2)}/20</span>
              <button
                onClick={() => deleteNote(index)}
                style={styles.deleteButton}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      <div style={styles.stats}>
        <p>Total de notes : {notes.length}</p>
        <p style={styles.average}>
          Moyenne : <strong>{calculateAverage()}/20</strong>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '2px solid #FF9800',
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
    backgroundColor: '#FF9800',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    marginBottom: '10px',
    fontWeight: 'bold'
  },
  notesContainer: {
    marginBottom: '20px'
  },
  noteItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '5px 0',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '5px'
  },
  noteValue: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#FF9800'
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    fontStyle: 'italic'
  },
  stats: {
    borderTop: '2px solid #FF9800',
    paddingTop: '15px',
    textAlign: 'center'
  },
  average: {
    fontSize: '20px',
    color: '#FF9800'
  }
};

export default GradeManager;
