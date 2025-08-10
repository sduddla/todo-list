import type { TodoType } from './Todo';
import TodoListItem from './TodoListItem';

export default function TodoList({ todos }: { todos: TodoType[] }) {
  return (
    <>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}
