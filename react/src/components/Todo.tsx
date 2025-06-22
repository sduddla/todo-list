import TodoEditor from './TodoEditor';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export default function Todo() {
  return (
    <>
      <TodoHeader />
      <TodoEditor />
      <TodoList />
    </>
  );
}
