import type { TodoType } from './Todo';
import TodoListItem from './TodoListItem';

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}: {
  todos: TodoType[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
  return (
    <>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
}
