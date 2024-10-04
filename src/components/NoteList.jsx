import React from "react";
import { Checkbox, Button } from "@mui/material";
import trash from "../img/trash.svg";
import pen from "../img/pen.svg";

const NoteList = ({ todos, handleToggleComplete, handleDeleteTodo, handleEditTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          className="notes"
          key={todo.id}
          
        >
          <div className="noteContent">
            <Checkbox
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
              sx={{
                color:'#6C63FF',
              
              }}
              className="checkboxNote"
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              className="noteText"
            >
              {todo.text}
            </span>
            <div className="btnNote">
              <Button onClick={() => handleEditTodo(todo.id)}>
                <img src={pen} />
              </Button>
              <Button color="error" onClick={() => handleDeleteTodo(todo.id)}>
                <img src={trash} />
              </Button>
            </div>
          </div>
          <div className="noteBorder"></div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
