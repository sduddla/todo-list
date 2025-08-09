export default function TodoEditor() {
  return (
    <form className='flex p-6'>
      <input
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
