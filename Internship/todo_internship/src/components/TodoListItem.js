// import React from "react";
// import TodoForm from "./TodoForm";
// import {
//   RiCheckboxCircleFill,
//   RiCheckboxBlankCircleLine,
// } from "react-icons/ri";
// import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";

// function TodoListItem({
//   todo,
//   completeTodo,
//   removeTodo,
//   submitUpdate,
//   edit,
//   setEdit,
// }) {
//   return (
//     <>
//       <div className="todo-list-item">
//         <div className="todo-mark-icon">
//           {todo.isComplete ? (
//             <RiCheckboxCircleFill onClick={() => completeTodo(todo.id)} />
//           ) : (
//             <RiCheckboxBlankCircleLine
//               onClick={() => completeTodo(todo.id)}
//               // className="todo-mark-icon"
//             />
//           )}
//         </div>

//         <div className="todo-item">
//           {todo.isComplete ? (
//             <p>
//               <del>{todo.text}</del>
//             </p>
//           ) : edit.id === todo.id ? (
//             <TodoForm edit={edit} onSubmit={submitUpdate} />
//           ) : (
//             <p> {todo.text} </p>
//           )}
//         </div>
//       </div>
//       <div className="todo-icons">
//         {!todo.isComplete && (
//           <MdModeEditOutline
//             onClick={() => setEdit({ id: todo.id, value: todo.text })}
//             className="edit-icon"
//           />
//         )}
//         <MdDeleteOutline
//           onClick={() => removeTodo(todo.id)}
//           className="delete-icon"
//         />
//       </div>
//     </>
//   );
// }

// TodoListItem.defaultProps = {
//   edit: { id: null, value: "" },
// };

// export default TodoListItem;

import React from "react";
import TodoForm from "./TodoForm";
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";

function TodoListItem({
  todo,
  completeTodo,
  removeTodo,
  submitUpdate,
  edit,
  setEdit,
}) {
  // const todoClass = todo.isComplete
  //   ? todo.id % 2 === 0
  //     ? "todo-completed even"
  //     : "todo-completed odd"
  //   : "todo-pending";

    if (todo.isComplete){
      if (todo.id%2===0){
        const todoClass="todo-completed even";
      }
  
      else {
         todoClass="todo-completed odd";
      }

    }
    else todoClass="todo-pending";


  

  return (
    <div className={`todo-list-item ${todoClass}`}>
      <div className="todo-mark-icon">
        {todo.isComplete ? (
          <RiCheckboxCircleFill onClick={() => completeTodo(todo.id)} />
        ) : (
          <RiCheckboxBlankCircleLine
            onClick={() => completeTodo(todo.id)}
          />
        )}
      </div>

      <div className="todo-item">
        {todo.isComplete ? (
          <p>
            <del>{todo.text}</del>
          </p>
        ) : edit.id === todo.id ? (
          <TodoForm edit={edit} onSubmit={submitUpdate} />
        ) : (
          <p>{todo.text}</p>
        )}
      </div>

      <div className="todo-icons">
        {!todo.isComplete && (
          <MdModeEditOutline
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        )}
        <MdDeleteOutline
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  );
}

TodoListItem.defaultProps = {
  edit: { id: null, value: "" },
};

export default TodoListItem;

