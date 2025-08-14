import type { TodoType } from './Todo';
import TodoListItem from './TodoListItem';

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  modifyTodo,
}: {
  todos: TodoType[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  modifyTodo: (id: number, text: string) => void;
}) {
  return (
    <>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          modifyTodo={modifyTodo}
        />
      ))}
    </>
  );
}
