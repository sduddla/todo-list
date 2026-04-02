import { Pencil, X } from 'lucide-react';
import type { TodoType } from '../types/todo';
import { useEffect, useRef, useState } from 'react';

export default function TodoListItem({
  todo,
  toggleTodo,
  deleteTodo,
  modifyTodo,
}: {
  todo: TodoType;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  modifyTodo: (id: number, text: string) => void;
}) {
  const [isModify, setIsModify] = useState(false);
  const [modifyText, setModifyText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isModify && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModify]);

  const modifyHandler = () => {
    setIsModify((isModify) => !isModify);
    setModifyText((modifyText) => (modifyText === '' ? todo.text : modifyText));
    if (modifyText.trim() !== '' && todo.text !== modifyText) {
      modifyTodo(todo.id, modifyText);
    }
  };
  return (
    <>
      <li className='flex items-center justify-between p-6 pb-0 pt-8 first:mt-4 first:pt-0 last:mb-10'>
        <label className='flex items-center cursor-pointer'>
          <input
            type='checkbox'
            className='hidden peer'
            onChange={() => toggleTodo(todo.id)}
          />
          <span className='relative w-5 h-5 rounded-full border border-[#1A82A6] mr-4 transition-colors duration-200 peer-checked:bg-[#1A82A6] flex items-center justify-center peer-checked:before:content-["✓"] peer-checked:before:text-white'></span>
        </label>

        <div
          className={`flex-1 min-w-0 ${
            isModify ? 'border-b border-[#1A82A6]' : ''
          }`}
        >
          {isModify ? (
            <input
              type='text'
              value={modifyText}
              onChange={(e) => setModifyText(e.target.value)}
              className='focus:outline-none w-full'
              ref={inputRef}
              onKeyDown={(e) => {
                if (e.key === 'Enter') modifyHandler();
                if (e.key === 'Escape') setIsModify(false);
              }}
            />
          ) : (
            <span
              className={`cursor-default ${
                todo.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              {todo.text}
            </span>
          )}
        </div>

        <div className='flex gap-3 shrink-0 ml-5'>
          <button
            className='relative flex items-center justify-center group cursor-pointer'
            onClick={modifyHandler}
          >
            <div className='absolute w-8 h-8 rounded-md transition-colors duration-200 group-hover:bg-gray-100'></div>
            <Pencil className='w-4 h-4 text-gray-400 relative' />
          </button>

          <button
            className='relative flex items-center justify-center group cursor-pointer'
            onClick={() => deleteTodo(todo.id)}
          >
            <div className='absolute w-8 h-8 rounded-md transition-colors duration-200 group-hover:bg-gray-100'></div>
            <X className='w-5 h-5 text-gray-400 relative' />
          </button>
        </div>
      </li>
    </>
  );
}
