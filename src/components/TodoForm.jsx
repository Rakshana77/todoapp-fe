import { useState } from 'react';
import { addTodo } from '../api/todoApi';

const TodoForm = ({ refreshTodos }) => {
  const [title, setTitle] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add new todo through the API
    if (title.trim()) {
      await addTodo({ title });
      setTitle('');
      refreshTodos();  // Refresh the todo list after adding a new todo
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add a New Todo</h2>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12 col-xl-6 col-xxl-5">
          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter todo title"
                required
                maxLength={50}
              />
              <button type="submit" className="btn btn-primary">
                Add Todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
