export default function TodoListItem() {
  return (
    <>
      <li className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-3 h-4 w-4 accent-[#61dafb] cursor-pointer"
          />
          <span className="text-white">음악 듣기</span>
        </div>
        <button className="text-red-500 cursor-pointer">Delete</button>
      </li>
    </>
  );
}
