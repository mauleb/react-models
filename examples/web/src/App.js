import React, { useEffect } from 'react';
import { useTodos } from './models';

const App = () => {
  const [todos, { addTodo }] = useTodos({ complete: false });

  useEffect(() => {
    const interval = setInterval(() => addTodo({ name: 'nice', complete: false }), 4000);
    return () => clearInterval(interval);
  },[addTodo]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {
        todos.map((todo) => (
          <div key={todo.name} style={{ display: 'flex', flexDirection: 'row' }}>
            <div>{todo.name}</div>
            <div>{todo.complete}</div>
          </div>
        ))
      }
    </div>
  );
}

export default App;