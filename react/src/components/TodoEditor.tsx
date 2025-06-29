import { useState } from 'react';

type TodoEditorProps = {
  addTodo: (text: string) => void;
};

export default function TodoEditor({ addTodo }: TodoEditorProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
    }
    setText('');
  };

  return (
    <form className="flex p-4 mb-3" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 text-white focus:outline-none border-2 border-[#61dafb] rounded-l-md placeholder-white/30"
      />
      <button className="bg-[#61dafb] px-4 rounded-r-md cursor-pointer">
        Add
      </button>
    </form>
  );
}
