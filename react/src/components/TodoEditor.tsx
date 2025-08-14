import { useState } from 'react';

export default function TodoEditor({
  addTodo,
}: {
  addTodo: (text: string) => void;
}) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 문자열 양 끝 공백 제거 후 내용 있으면? -> addTodo() 실행
    if (text.trim()) {
      addTodo(text.trim());
    }
    // console.log(text);
    setText('');
  };

  return (
    <form className='flex p-6 pb-0 mb-6' onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
        placeholder='Enter a new todo'
        className='flex-grow p-2 focus:outline-none border-2 border-[#1A82A6] border-r-0 rounded-l-md placeholder:text-sm placeholder:text-black/30'
      />
      <button className='bg-[#1A82A6] px-4 rounded-r-md cursor-pointer text-white hover:bg-[#166B84]'>
        Add
      </button>
    </form>
  );
}
