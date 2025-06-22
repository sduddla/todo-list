import Todo from './components/Todo';

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#1e1e1e]">
      <div className="max-w-md w-full h-[500px] bg-[#1c1c1c] border border-[#333333] rounded-lg overflow-hidden flex flex-col">
        <Todo />
      </div>
    </div>
  );
}
