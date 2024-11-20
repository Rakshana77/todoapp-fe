
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Todo App</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <TodoForm refreshTodos={() => window.location.reload()} />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
