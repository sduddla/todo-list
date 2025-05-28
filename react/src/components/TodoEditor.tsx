import { useState } from 'react';

interface TodoEditorProps {
  addTodo: (text: string) => void;
}

export default function TodoEditor({ addTodo }: TodoEditorProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
    // console.log(text);
  };
  return (
    <form className="flex p-4 mb-3" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 focus:outline-none border-2 border-[#61dafb] rounded-l-md placeholder-[#ffffff]/30 text-[#ffffff]"
      />
      <button className="bg-[#61dafb] px-4 rounded-r-md cursor-pointer">
        Add
      </button>
    </form>
  );
}
