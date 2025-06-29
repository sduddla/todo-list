import { useEffect, useState } from 'react';
import TodoEditor from './TodoEditor';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export type TodoType = {
  id: number;
  text: string;
  done: boolean;
};

export default function Todo() {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    // 불러오기
    const saved = sessionStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  // 등록
  const addTodo = (text: string) => {
    const newTodo: TodoType = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  // 토글
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // 삭제
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 저장
  useEffect(() => {
    sessionStorage.setItem('todos', JSON.stringify(todos));
  });

  return (
    <>
      <TodoHeader />
      <TodoEditor addTodo={addTodo} />
      <div className="overflow-y-auto">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}
