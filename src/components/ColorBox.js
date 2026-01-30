import React, { useState } from 'react';

const ColorBox = ({ initialColor = '#3498db', colorOptions = [] }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    if (colorOptions.length > 0) {
      // Choisir une couleur aléatoire dans colorOptions
      const randomIndex = Math.floor(Math.random() * colorOptions.length);
      setColor(colorOptions[randomIndex]);
    } else {
      // Générer une couleur aléatoire
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
      setColor(randomColor);
    }
  };

  return (
    <div style={styles.container}>
      <h2>🎨 Boîte à Couleur</h2>
      
      <div style={{
        ...styles.box,
        backgroundColor: color
      }}>
        <p style={styles.colorText}>{color}</p>
      </div>

      <button onClick={changeColor} style={styles.button}>
        Changer de couleur
      </button>

      {colorOptions.length > 0 && (
        <div style={styles.options}>
          <p>Options disponibles :</p>
          <div style={styles.colorPalette}>
            {colorOptions.map((c, index) => (
              <div
                key={index}
                style={{
                  ...styles.colorSample,
                  backgroundColor: c
                }}
                title={c}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '2px solid #9C27B0',
    borderRadius: '10px',
    margin: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  },
  box: {
    width: '200px',
    height: '200px',
    margin: '20px auto',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  colorText: {
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#9C27B0',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  options: {
    marginTop: '20px'
  },
  colorPalette: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  colorSample: {
    width: '40px',
    height: '40px',
    borderRadius: '5px',
    border: '2px solid #ddd'
  }
};

export default ColorBox;
