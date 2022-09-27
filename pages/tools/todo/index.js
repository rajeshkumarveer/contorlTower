import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { AiOutlineCloseCircle, AiOutlineDelete } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";
import { FiEdit2, FiEdit3 } from "react-icons/fi";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";

const Todo = () => {
  const [todos, setTodos] = React.useState([
    {
      id: 121,
      text: "Product 1 Updated",
      completed: true,
    },
    {
      id: 45,
      text: "Product 25 Upload",
      completed: false,
    },
    {
      id: 129,
      text: "Send RFP to Vendors",
      completed: true,
    },
  ]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
  const [completed, setCompleted] = React.useState(0);
  const [pending, setPending] = React.useState(0);
  var all = todos.length;

  React.useEffect(() => {
    console.log(todos);
    setCompleted(todos.filter((todo) => todo.completed).length);
    setPending(todos.filter((todo) => !todo.completed).length);
  }, [todos]);

  const handleSubmit = () => {
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  };

  const deleteTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const submitEdits = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  };
  return (
    <>
      <Card data-aos="zoom-in-up">
        <CardContent>
          <Box display="flex" flexWrap="wrap" sx={{ my: 2 }}>
            <Chip
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.light,

                color: (theme) => theme.palette.secondary.main,
                borderRadius: "6px",
                pl: "3px",
                pr: "3px",
              }}
              size="large"
              label={
                <Box display="flex">
                  <Typography>All : </Typography>
                  <Typography sx={{ pl: 1 }}>{all}</Typography>
                </Box>
              }
            />
            <Chip
              sx={{
                backgroundColor: (theme) => theme.palette.success.light,
                color: (theme) => theme.palette.success.main,
                borderRadius: "6px",
                pl: "3px",
                pr: "3px",
                mx: 1,
              }}
              size="large"
              label={
                <Box display="flex">
                  <Typography>Completed : </Typography>
                  <Typography sx={{ pl: 1 }}>{completed}</Typography>
                </Box>
              }
            />
            <Chip
              sx={{
                backgroundColor: (theme) => theme.palette.error.light,
                color: (theme) => theme.palette.error.main,
                borderRadius: "6px",
                pl: "3px",
                pr: "3px",
              }}
              size="large"
              label={
                <Box display="flex">
                  <Typography>Pending : </Typography>
                  <Typography sx={{ pl: 1 }}>{pending}</Typography>
                </Box>
              }
            />
          </Box>

          <Grid display="flex" alignItems="center" container>
            <Grid item xs={12} sm={9} md={10} lg={10}>
              <CustomTextField
                placeholder="Enter Todo"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
                fullWidth
                sx={{ minWidth: "89%" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={2}
              lg={2}
              sx={{ mt: { xs: 1, sm: 0 } }}
            >
              <Button
                onClick={handleSubmit}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: (theme) => theme.palette.secondary.main,
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.secondary.dark,
                  },
                  color: "#fff",
                  borderRadius: "6px",
                  width: "100%",
                  m: { lg: 1, sm: 1, md: 1 },
                }}
              >
                ADD TODO
              </Button>
            </Grid>
          </Grid>

          <Box display="flex" flexDirection="column">
            {todos.map((todo) => {
              return (
                <Grid
                  display="flex"
                  alignItems="center"
                  sx={{ mt: "14px" }}
                  container
                >
                  <Grid item xs={12} sm={8} md={8} lg={8}>
                    {todo.id === todoEditing ? (
                      <>
                        <CustomTextField
                          placeholder="Edit Todo"
                          fullWidth
                          size="small"
                          defaultValue={todo.text}
                          onChange={(e) => setEditingText(e.target.value)}
                        />
                      </>
                    ) : (
                      <Box display="flex">
                        <Checkbox
                          checked={todo.completed}
                          onChange={() => toggleComplete(todo.id)}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                        <Box display="flex" flexDirection="column">
                          <Typography
                            style={{
                              textDecoration: todo.completed
                                ? "line-through"
                                : "none",
                            }}
                            variant="h5"
                            fontWeight={400}
                          >
                            {todo.text}
                          </Typography>
                          <Typography
                            variant="h6"
                            color="textSecondary"
                            fontWeight={400}
                            style={{
                              textDecoration: todo.completed
                                ? "line-through"
                                : "none",
                            }}
                          >
                            Feb 6,2020
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    lg={4}
                    sx={{
                      mt: { xs: 1, sm: 0 },
                      justifyContent: { xs: "start", sm: "end" },
                    }}
                    display="flex"
                    justifyContent="end"
                  >
                    {todo.id === todoEditing ? (
                      <>
                        <IconButton onClick={() => submitEdits(todo.id)}>
                          <BsCheck2All />
                        </IconButton>
                        <IconButton onClick={() => setTodoEditing(null)}>
                          <AiOutlineCloseCircle />
                        </IconButton>
                      </>
                    ) : (
                      <IconButton onClick={() => setTodoEditing(todo.id)}>
                        <FiEdit3 />
                      </IconButton>
                    )}
                    <IconButton
                      sx={{ color: "red" }}
                      onClick={() => deleteTodo(todo.id)}
                    >
                      <AiOutlineDelete />
                    </IconButton>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Todo;
