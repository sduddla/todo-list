import type { TodoType } from './Todo';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  todos: TodoType[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}: TodoListProps) {
  return (
    <ul className="divide-y divide-[#333]">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
