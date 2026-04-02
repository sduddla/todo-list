import TodoEditor from './TodoEditor';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import useTodos from '../hooks/useTodos';

export default function Todo() {
  const { todos, addTodo, toggleTodo, deleteTodo, modifyTodo } = useTodos();

  return (
    <>
      <TodoHeader />
      <TodoEditor addTodo={addTodo} />
      <div className='overflow-y-auto'>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          modifyTodo={modifyTodo}
        />
      </div>
    </>
  );
}
