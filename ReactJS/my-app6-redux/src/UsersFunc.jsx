import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUserAction, deleteUserAction, editUserAction, getAllUsersAction, updateUserAction } from "./actions";
import {
  Container,
  Button,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Box,
} from "@mui/material";
export const UsersFunc = () => {
  const { users, isEdit } = useSelector((state) => state);
  console.log(isEdit);
  const [person, setperson] = useState({
    id: "",
    email: "",
    username: "",
    password: "",
  });
  let { id, email, password, username } = person;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);
  console.log(users);

  const handleChange = (e) => {
    let newUser = { ...person };
    newUser[e.target.name] = e.target.value;
    setperson(newUser);
  };
  const handleCreate = () => {
    dispatch(createUserAction(person));
    handleClear()
  };

  const handleDelete = (user) => {
    dispatch(deleteUserAction(user));
  };

  const handleEdit = (user) =>{
    setperson(user)
    dispatch(editUserAction(true))
  }
  const handleUpdate = () => {
      dispatch(updateUserAction(person))
  };

  const handleClear = () => {
      setperson({
        id: "",
        email: "",
        username: "",
        password: "",
      })
  };
  return (
    <div>
      <Container>
        <TableContainer component={Paper} style={{ marginTop: "80px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Password</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.password}</TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleEdit(row);
                      }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "red",
                      }}
                      onClick={() => {
                        handleDelete(row);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <hr />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="ID"
            variant="outlined"
            value={id}
            name="id"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            name="password"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            name="username"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Box>
        {isEdit ? (
          <Button
            variant="contained"
            onClick={() => {
              handleUpdate();
            }}
          >
            Update User
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              handleCreate();
            }}
          >
            Create User
          </Button>
        )}
      </Container>
    </div>
  );
};
