// components/TodoFetcher.tsx
import { useEffect, useState } from 'react';
import TodoList from '../components/todolist';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodoFetcher = () => {
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
    <>
      {error ? <p className="text-red-500">{error}</p> : <TodoList todos={todos} />}
    </>
  );
};

export default TodoFetcher;
