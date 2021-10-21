import { Button, Input, Label } from "./CreateNote";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { actionCreators } from "../../state";
import { bindActionCreators } from "redux";
import { color } from "../../colors";
import { useDispatch } from "react-redux";
import { useState } from "react";

type User = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const [user, setUser] = useState<User>({ name: "", email: "", password: "" });
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();
  const { registerUser } = bindActionCreators(actionCreators, dispatch);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setUser({ ...user, name: value });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setUser({ ...user, email: value });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setUser({ ...user, password: value });
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.email === "" || user.password === "" || user.name === "") {
      setError("Bad credentials");
      return;
    }
    registerUser(user);

    setUser({ name: "", email: "", password: "" });

    alert("registered");
  };

  return (
    <>
      <Grid
        item
        lg={3}
        md={6}
        sm={8}
        xs={10}
        margin="0 auto"
        textAlign="center"
      >
        <h1>Register</h1>
        <p style={{ color: color.red }}>{error !== "" ? error : ""}</p>
      </Grid>
      <form onSubmit={handleSignUp}>
        <Grid item lg={3} md={6} sm={8} xs={10} margin="0 auto">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            value={user.name}
            onChange={handleName}
          />
        </Grid>
        <Grid item lg={3} md={6} sm={8} xs={10} margin="0 auto">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={user.email}
            onChange={handleEmail}
          />
        </Grid>
        <Grid item lg={3} md={6} sm={8} xs={10} margin="0 auto">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={user.password}
            onChange={handlePassword}
          />
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          sm={8}
          xs={10}
          margin="0 auto"
          mt={2}
          textAlign="center"
        >
          <Button
            style={{ backgroundColor: color.black, marginRight: "1em" }}
            type="submit"
          >
            register
          </Button>
          <Link to="/">
            <Button style={{ backgroundColor: color.black }}>log in</Button>
          </Link>
        </Grid>
      </form>
    </>
  );
};
