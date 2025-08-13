import { X } from 'lucide-react';
import type { TodoType } from './Todo';

export default function TodoListItem({
  todo,
  toggleTodo,
}: {
  todo: TodoType;
  toggleTodo: (id: number) => void;
}) {
  return (
    <>
      <li className='flex items-center justify-between pl-6 pr-6 pt-6 pb-3'>
        <div className='flex items-center'>
          <label
            className='flex items-center cursor-pointer'
            onChange={() => toggleTodo(todo.id)}
          >
            <input type='checkbox' className='hidden peer' />
            <span className='relative w-5 h-5 rounded-full border border-[#1A82A6] mr-4 transition-colors duration-200 peer-checked:bg-[#1A82A6] flex items-center justify-center peer-checked:before:content-["✓"] peer-checked:before:text-white'></span>
          </label>

          <span
            className={`cursor-default ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {todo.text}
          </span>
        </div>
        <button className='relative flex items-center justify-center cursor-pointer group'>
          <div className='absolute w-8 h-8 rounded-md transition-colors duration-200 group-hover:bg-gray-100'></div>
          <X className='w-5 h-5 text-gray-400 relative' />
        </button>
      </li>
    </>
  );
}
