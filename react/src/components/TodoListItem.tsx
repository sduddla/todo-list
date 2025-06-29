import type { TodoType } from './Todo';

type TodoListItemProps = {
  todo: TodoType;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export default function TodoListItem({
  todo,
  toggleTodo,
  deleteTodo,
}: TodoListItemProps) {
  return (
    <>
      <li className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-3 h-4 w-4 accent-[#61dafb] cursor-pointer"
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          <span
            className={`${
              todo.done ? 'line-through text-gray-500' : 'text-white'
            }`}
          >
            {todo.text}
          </span>
        </div>
        <button
          className="text-red-500 cursor-pointer"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
}
