// components/TodoList.tsx
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {

  const first30Todos = todos.slice(0, 30);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todos data fetched from <a href="https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a></h1>
      <ul>
        {first30Todos.map((todo) => (
          <li key={todo.id} className="mb-2 p-2 border rounded">
            <p className={`font-medium ${todo.completed ? 'line-through' : ''}`}>
              {todo.title}
              {todo.userId}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
