import React, { useState } from 'react';
import './styles.css';

export default function App() {
  const [tasks, setTasks] = useState([
    'Walk the dog',
    'Water the plants',
    'Wash the dishes'
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div>
          <button onClick={handleAddTask}>Submit</button>
        </div>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
