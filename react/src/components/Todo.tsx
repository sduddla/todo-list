import { useEffect, useState } from 'react';
import TodoEditor from './TodoEditor';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export interface TodoType {
  id: number;
  text: string;
  done: boolean;
}

export default function Todo() {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const saved = sessionStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const addTodo = (text: string) => {
    const newTodo: TodoType = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 저장
  useEffect(() => {
    sessionStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoHeader />
      <TodoEditor addTodo={addTodo} />
      <div className="overflow-y-auto flex-1">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}
