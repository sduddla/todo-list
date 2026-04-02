import { useEffect, useState } from 'react';
import TodoEditor from './TodoEditor';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import type { TodoType } from '../types/todo';

export default function Todo() {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    // 불러오기
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  // 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  // 할 일 등록
  const addTodo = (text: string) => {
    const newTodo: TodoType = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  // 할 일 완료 여부 토글
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 할 일 삭제
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 할 일 수정
  const modifyTodo = (id: number, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

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
