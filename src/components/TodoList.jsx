import { useEffect, useState } from 'react';
import { getTodos, updateTodo, deleteTodo } from '../api/todoApi';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos from API
  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  // Toggle completion status of todo
  const toggleCompletion = async (id, completed) => {
    await updateTodo(id, { completed: !completed });
    fetchTodos();
  };

  // Remove todo from the list
  const removeTodo = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  // Fetch todos when component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Todo List</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12 col-xl-8 col-xxl-7">
          <ul className="list-group">
            {todos.map(todo => (
              <li
                key={todo._id}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  todo.completed ? 'list-group-item-success' : ''
                }`}
              >
                <div className="d-flex align-items-center">
                  {/* Checkbox for marking completion */}
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={todo.completed}
                    onChange={() => toggleCompletion(todo._id, todo.completed)}
                  />
                  {/* Todo title */}
                  <span className={`fs-5 ${todo.completed ? 'text-decoration-line-through' : ''}`}>
                    {todo.title}
                  </span>
                </div>
                {/* Delete button */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeTodo(todo._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
