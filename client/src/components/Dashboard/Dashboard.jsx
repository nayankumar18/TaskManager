import './Dashboard.css'
import  { useState, useEffect } from 'react';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
    useEffect(() => {
      const savedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (savedTasks) {
        setTasks(savedTasks);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    const addTask = () => {
      if (newTask.trim() !== '' && startDate && endDate) {
        setTasks([...tasks, { 
          id: Date.now(), 
          text: newTask, 
          startDate: startDate, 
          endDate: endDate, 
          completed: false 
        }]);
        setNewTask('');
        setStartDate('');
        setEndDate('');
      }
    };
  
    const deleteTask = (taskId) => {
      setTasks(tasks.filter(task => task.id !== taskId));
    };
  
    const toggleComplete = (taskId) => {
      setTasks(tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }));
    };
  

  return (
    <div className="container">
      <h1 className="header">
        <span className="task">Task</span> <span className="manager">Manager</span> <span className="dash">Dashboard</span>
      </h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span>{task.text}</span>
            <span>Start: {task.startDate}</span>
            <span>End: {task.endDate}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard








