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

  return (
    <>
      <TodoHeader />
      <TodoEditor addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
}
