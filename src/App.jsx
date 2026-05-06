import { useMemo, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const initialTodos = [
  { id: 1, text: "Review hooks notes", completed: false },
  { id: 2, text: "Build a small UI", completed: true },
  { id: 3, text: "Refactor into components", completed: false },
];

const filters = [
  { value: "all", label: "All" },
  { value: "done", label: "Done" },
  { value: "pending", label: "Pending" },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const filteredTodos = useMemo(() => {
    if (filter === "done") {
      return todos.filter((todo) => todo.completed);
    }
    if (filter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }
    return todos;
  }, [filter, todos]);

  const remainingCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Todo Studio</h1>
          <p>Plan, track, and review your progress.</p>
        </div>
        <div className="app-stat">
          <span>Remaining</span>
          <strong>{remainingCount}</strong>
        </div>
      </header>

      <TodoForm onAdd={addTodo} />

      <section className="filters">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            className={filter === item.value ? "is-active" : ""}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </section>

      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
