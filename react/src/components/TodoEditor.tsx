export default function TodoEditor() {
  return (
    <form className="flex p-4 mb-3">
      <input
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
