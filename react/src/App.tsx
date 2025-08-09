import Todo from './components/Todo';

export default function App() {
  return (
    <div className='flex items-center justify-center h-screen bg-[#F2F2F2]'>
      <div className='max-w-[500px] w-full h-[580px] bg-white drop-shadow-lg rounded-lg overflow-hidden flex flex-col'>
        <Todo />
      </div>
    </div>
  );
}
