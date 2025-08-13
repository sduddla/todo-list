import type { TodoType } from './Todo';
import TodoListItem from './TodoListItem';

export default function TodoList({
  todos,
  toggleTodo,
}: {
  todos: TodoType[];
  toggleTodo: (id: number) => void;
}) {
  return (
    <>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </>
  );
}
