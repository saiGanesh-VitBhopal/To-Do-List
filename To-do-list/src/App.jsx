import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
      },
    ]);

    setTask("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <div className="app-container">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task..."
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="tasks-list">
        {tasks.length > 0 ? (
          tasks.map((t) => (
            <li key={t.id} className="task-item">
              <span className="task-text">{t.text}</span>
              <button className="delete-btn" onClick={() => deleteTask(t.id)}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="empty-state">No tasks added yet</p>
        )}
      </ul>
    </div>
  );
}

export default App;
