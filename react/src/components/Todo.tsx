import { useState } from 'react';
import TodoEditor from './TodoEditor';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Todo() {
  const [todos, setTodos] = useState<TodoType[]>([]);

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

  return (
    <>
      <TodoHeader />
      <TodoEditor addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}
