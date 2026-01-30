import React, { useState } from 'react';

const TodoList = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Moyenne');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') return;

    const newTask = {
      id: Date.now(),
      name: taskName.trim(),
      priority: priority,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskName('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const completedCount = tasks.filter(task => task.completed).length;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Haute': return '#f44336';
      case 'Moyenne': return '#FF9800';
      case 'Basse': return '#4CAF50';
      default: return '#999';
    }
  };

  return (
    <div style={styles.container}>
      <h2>✅ Todo List avec Priorités</h2>

      <form onSubmit={addTask} style={styles.form}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nom de la tâche"
          style={styles.input}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={styles.select}
        >
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <button type="submit" style={styles.button}>
          Ajouter
        </button>
      </form>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="🔍 Rechercher une tâche..."
        style={styles.searchInput}
      />

      <div style={styles.stats}>
        <p>Total : {tasks.length} tâches</p>
        <p>Terminées : {completedCount}/{tasks.length}</p>
      </div>

      <div style={styles.taskList}>
        {filteredTasks.length === 0 ? (
          <p style={styles.empty}>Aucune tâche trouvée</p>
        ) : (
          filteredTasks.map(task => (
            <div
              key={task.id}
              style={{
                ...styles.taskItem,
                opacity: task.completed ? 0.6 : 1
              }}
            >
              <div style={styles.taskContent}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  style={styles.checkbox}
                />
                <span style={{
                  ...styles.taskName,
                  textDecoration: task.completed ? 'line-through' : 'none'
                }}>
                  {task.name}
                </span>
                <span
                  style={{
                    ...styles.priorityBadge,
                    backgroundColor: getPriorityColor(task.priority)
                  }}
                >
                  {task.priority}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                style={styles.deleteButton}
              >
                Supprimer
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '2px solid #673AB7',
    borderRadius: '10px',
    margin: '20px',
    backgroundColor: '#f9f9f9'
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap'
  },
  input: {
    flex: 2,
    minWidth: '200px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd'
  },
  select: {
    flex: 1,
    minWidth: '120px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#673AB7',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    boxSizing: 'border-box'
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '5px',
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  taskList: {
    maxHeight: '400px',
    overflowY: 'auto'
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '5px'
  },
  taskContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flex: 1
  },
  checkbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer'
  },
  taskName: {
    flex: 1,
    fontSize: '16px'
  },
  priorityBadge: {
    padding: '5px 10px',
    borderRadius: '15px',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  deleteButton: {
    padding: '8px 15px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    fontStyle: 'italic',
    padding: '20px'
  }
};

export default TodoList;
