import { Button, Input, Label } from "./CreateNote";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { RootState } from "../../state/reducers";
import { actionCreators } from "../../state";
import { bindActionCreators } from "redux";
import { color } from "../../colors";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

type Props = {
  children: JSX.Element;
};

const selectIsLoggedIn = (state: RootState) => state.isLoggedIn;
const selectUser = (state: RootState) => state.user;

const LoginForm = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();
  const userState = useSelector(selectUser);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { setSignIn } = bindActionCreators(actionCreators, dispatch);

  const adminUser = {
    email: userState.email,
    password: userState.password,
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setEmail(value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setPassword(value);
  };

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email !== adminUser.email || password !== adminUser.password) {
      setError("Bad credentials");
      return;
    }

    setEmail("");
    setPassword("");
    setSignIn(true);
  };

  if (isLoggedIn) {
    return props.children;
  }

  return (
    <>
      <Grid
        item
        lg={4}
        md={5}
        sm={6}
        xs={10}
        margin="0 auto"
        textAlign="center"
      >
        <h1>Log in</h1>
        <p style={{ color: color.red }}>{error !== "" ? error : ""}</p>
      </Grid>
      <form onSubmit={handleSignIn}>
        <Grid item lg={3} md={6} sm={8} xs={10} margin="0 auto">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" value={email} onChange={handleEmail} />
        </Grid>
        <Grid item lg={3} md={6} sm={8} xs={10} margin="0 auto">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
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
          <Link to="/register">
            <Button
              style={{ backgroundColor: color.black, marginRight: "1em" }}
              type="submit"
            >
              register
            </Button>
          </Link>
          <Button style={{ backgroundColor: color.black }} type="submit">
            log in
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default LoginForm;
