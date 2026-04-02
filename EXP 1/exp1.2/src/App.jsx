import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue
      }
      setTasks([...tasks, newTask])
      setInputValue('')
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  return (
    <div className="App">
      <h1>Simple To-Do List SPA</h1>
      <div className="todo-container">
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="tasks-list">
          {tasks.length === 0 ? (
            <p className="empty-message">No tasks yet. Add one to get started!</p>
          ) : (
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  <span className="task-text">{task.text}</span>
                  <button 
                    className="delete-btn" 
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="task-count">
          Total Tasks: {tasks.length}
        </div>
      </div>
    </div>
  )
}

export default App
