// import React, { useState, useEffect } from "react";
// import TodoForm from "./TodoForm";
// import TodoList from "./TodoList";
// import "./Todo.css";

// const LOCAL_STORAGE_KEY = "react-todo-list-task";

// const Todo = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if (storageTodos) {
//       setTodos(storageTodos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = (todo) => {
//     if (!todo.text) return;
//     setTodos([todo, ...todos]);
//   };

//   const removeTodo = (id) => {
//     const removeArray = todos.filter((todo) => todo.id !== id);
//     setTodos(removeArray);
//   };

//   const updateTodo = (todoId, newValue) => {
//     if (!newValue.text) return;
//     setTodos((prev) =>
//       prev.map((item) => (item.id === todoId ? newValue : item))
//     );
//   };

//   const completeTodo = (id) => {
//     let updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         todo.isComplete = !todo.isComplete;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   return (
//     <section className="main-container">
//       <h1 className="todolist-header">TODO List</h1>
//       <TodoForm onSubmit={addTodo} />
//       <TodoList
//         todos={todos}
//         completeTodo={completeTodo}
//         removeTodo={removeTodo}
//         updateTodo={updateTodo}
//       />
//     </section>
//   );
// };

// export default Todo;
// import React, { useState, useEffect } from "react";
// import TodoForm from "./TodoForm";
// import TodoList from "./TodoList";
// import "./Todo.css";

// const LOCAL_STORAGE_KEY = "react-todo-list-task";

// const Todo = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if (storageTodos) {
//       setTodos(storageTodos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = (todo) => {
//     if (!todo.text) return;
//     setTodos([todo, ...todos]);
//   };

//   const removeTodo = (id) => {
//     const removeArray = todos.filter((todo) => todo.id !== id);
//     setTodos(removeArray);
//   };

//   const updateTodo = (todoId, newValue) => {
//     if (!newValue.text) return;
//     setTodos((prev) =>
//       prev.map((item) => (item.id === todoId ? newValue : item))
//     );
//   };

//   const completeTodo = (id) => {
//     let updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         todo.isComplete = !todo.isComplete;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   return (
//     <section className="main-container">
//       <h1 className="todolist-header">TODO List</h1>
//       <TodoForm onSubmit={addTodo} />
//       <TodoList
//         todos={todos}
//         completeTodo={completeTodo}
//         removeTodo={removeTodo}
//         updateTodo={updateTodo}
//       />
//     </section>
//   );
// };

// export default Todo;
import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Todo.css";

const LOCAL_STORAGE_KEY = "react-todo-list-task";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1); // Initialize the ID counter

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
      setNextId(storageTodos.length + 1); // Update the ID counter
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text) return;
    const newTodo = { ...todo, id: nextId }; // Assign the next ID
    setTodos([newTodo, ...todos]);
    setNextId((prevId) => prevId + 1); // Increment the ID counter
  };

  const removeTodo = (id) => {
    const removeArray = todos.filter((todo) => todo.id !== id);
    setTodos(removeArray);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) return;
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <section className="main-container">
      <h1 className="todolist-header">TODO List</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </section>
  );
};

export default Todo;


