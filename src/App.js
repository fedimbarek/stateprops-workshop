import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ListManager from './components/ListManager';
import ColorBox from './components/ColorBox';
import GradeManager from './components/GradeManager';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🎓 Projet React : State et Props</h1>
        <p>Atelier pratique sur la gestion du state et des props</p>
      </header>

      <main className="App-main">
        {/* Exercice 1 : Compteur */}
        <Counter initialCount={10} step={5} />

        {/* Exercice 2 : Liste Dynamique */}
        <ListManager
          initialItems={['React', 'Angular', 'VueJs']}
          placeholder="Ajouter un framework..."
        />

        {/* Exercice 3 : Changement de Couleur */}
        <ColorBox
          initialColor="#3498db"
          colorOptions={['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6']}
        />

        {/* Exercice 4 : Gestionnaire de Notes */}
        <GradeManager initialNotes={[15, 12.5, 18, 14]} />

        {/* Exercice 5 : Todo List */}
        <TodoList
          initialTasks={[
            { id: 1, name: 'Apprendre React', priority: 'Haute', completed: false },
            { id: 2, name: 'Faire les exercices', priority: 'Moyenne', completed: true },
            { id: 3, name: 'Réviser les hooks', priority: 'Basse', completed: false }
          ]}
        />
      </main>

      <footer className="App-footer">
        <p>Année Universitaire : 2025-2026</p>
      </footer>
    </div>
  );
}

export default App;
