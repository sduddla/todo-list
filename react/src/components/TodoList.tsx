import type { TodoType } from './Todo';
import TodoListItem from './TodoListItem';

type TodoListProps = {
  todos: TodoType[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}: TodoListProps) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
