// components/Todos.tsx
import { useEffect, useState } from 'react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("fetched data",data)
        setTodos(data);
      } catch (error) {
        setError('Failed to fetch todos');
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="mb-2 p-2 border rounded">
              <p className={`font-medium ${todo.completed ? 'line-through' : ''}`}>
                {todo.title}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
