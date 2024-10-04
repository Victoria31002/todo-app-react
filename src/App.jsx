import { useState } from "react";
import "./App.css";
import AddModal from "./components/AddModal";
import darkThm from "./img/darkThm.svg";

import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import NoteList from "./components/NoteList";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
 
  const [todos, setTodos] = useState([
    { id: 1, text: "Note 1", completed: false },
    { id: 2, text: "Note 2", completed: true },
  ]);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);


  const [newTodo, setNewTodo] = useState("");

  const [editTodoId, setEditTodoId] = useState(null);

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setNewTodo(todoToEdit.text);
      setModalOpen(true);
      setEditTodoId(id);
    }
  };

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };



  const handleCloseModal = () => {
    setModalOpen(false);
    setNewTodo(""); 
  };


  const handleAddTodo = () => {
    if (newTodo) {
      if (editTodoId) {
        setTodos(
          todos.map((todo) =>
            todo.id === editTodoId ? { ...todo, text: newTodo } : todo
          )
        );
        setEditTodoId(null);
      } else {
        setTodos([
          ...todos,
          { id: Date.now(), text: newTodo, completed: false },
        ]);
      }
      setNewTodo("");
      setModalOpen(false);
    }
  };

  
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "complete") return todo.completed;
      if (filter === "incomplete") return !todo.completed;
      return true;
    })
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>TodoList</h1>
        <div className="container">
          <div className="todoMain">
            <TextField
              className="searchNote"
              label="Search note..."
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "#6C63FF",  marginLeft: '406px' ,marginRight:'20px'}} />{" "}
                   
                  </InputAdornment>
                ),
              }}
            />

            <FormControl variant="outlined">
              <InputLabel  sx={{ color: '#6C63FF' }}></InputLabel>
              <Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                sx={{
                  width:' 85px',
                padding:8,
                width:'auto',
                padding:'8px',
                  backgroundColor: '#6C63FF',
                  color: '#F7F7F7',
                  '& .MuiSelect-select': {
                    padding: '8px',
                    display: 'flex', 
        alignItems: 'center', 
                  },
                  '& .MuiSelect-icon': {
                    color: '#F7F7F7', 
                  },
                  '&:hover': {
                    backgroundColor: '#6C63FF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#6C63FF',
                  },
                  '&.MuiSelect-outlined': {
                    borderRadius: '5px',
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: '#F7F7F7',
                      color: '#6C63FF',
                      borderRadius: '5px',
                    },
                  },
                }}
              >
                <MenuItem value="all" sx={{ color: '#6C63FF' }}>All</MenuItem>
                <MenuItem value="complete" sx={{ color: '#6C63FF' }}>Complete</MenuItem>
                <MenuItem value="incomplete" sx={{ color: '#6C63FF' }}>Incomplete</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              onClick={handleThemeToggle}
              className="btnTheme"
            >
              <img src={darkThm} className="themeIcon" />
            </Button>
          </div>
          <div className="noteList">
            <NoteList
              todos={filteredTodos}
              handleToggleComplete={handleToggleComplete}
              handleDeleteTodo={handleDeleteTodo}
            />
          </div>
        </div>
        <Button
          variant="contained"
          disableRipple
          onClick={() => setModalOpen(true)}
          className="btnAdd"
        >
          +
        </Button>
        <AddModal
          className="btnAdd"
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          handleClose={handleCloseModal}
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleAddTodo={handleAddTodo}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
