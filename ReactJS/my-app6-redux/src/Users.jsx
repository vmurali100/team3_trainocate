import React, { Component } from "react";
import { connect } from "react-redux";
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

import { createUserAction, deleteUserAction, editUserAction, getAllUsersAction } from "./actions";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        id: "",
        email: "",
        username: "",
        password: "",
      },
    };
    
  }

  async componentDidMount() {
    // axios.get("http://www.filltext.com/?rows=5&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").then(res=>{
    //   console.log(res.data);
    //       this.props.dispatch(getAllUsersAction(res.data))
    // })
    // let response = await axios.get(
    //   "http://www.filltext.com/?rows=5&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
    // );
    this.props.dispatch(getAllUsersAction());
  }

  shouldComponentUpdate(){
    console.log("ShouldComponentUpdate() called");
    return true
  }

  hanldeDelete = (user) => {
    this.props.dispatch(deleteUserAction(user));
    // console.log(user);
  };

  handleEdit = () => {
    this.props.dispatch(editUserAction(true));
  };

  handleChange = (e) => {
    let newUser = { ...this.state.person };
    newUser[e.target.name] = e.target.value;
    this.setState({ person: newUser });
  };
  handleCreate = () => {
    this.props.dispatch(createUserAction(this.state.person))
  };
  handleUpdate = () => {};
  render() {
    console.log(this.props);
    let { id, email, username, password } = this.state.person;
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Redux CRUD App
            </Typography>
          </Toolbar>
        </AppBar>
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
                {this.props.users.map((row, i) => (
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
                          this.handleEdit(row);
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
                          this.hanldeDelete(row);
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
                this.handleChange(e);
              }}
            />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              name="email"
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              name="password"
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              value={username}
              name="username"
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </Box>
          {this.props.isEdit ? (
            <Button
              variant="contained"
              onClick={() => {
                this.handleUpdate();
              }}
            >
              Update User
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                this.handleCreate();
              }}
            >
              Create User
            </Button>
          )}
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    users: state.users,
    isEdit: state.isEdit,
  };
}

export default connect(mapStateToProps)(Users);
