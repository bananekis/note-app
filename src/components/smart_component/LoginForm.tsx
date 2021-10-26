import { AuthContext } from "../auth/AuthProvider";
import { Button, Input, Label } from "./CreateNote";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Redirect, withRouter } from "react-router";
import { auth } from "../../firebaseConfig";
import { color } from "../../colors";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAlert } from "react-alert";
import { useContext, useState } from "react";

const LoginForm = withRouter(({ history }) => {
  const [error, setError] = useState<string>("");
  const alert = useAlert();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password }: any = e.currentTarget.elements;

    if (email.value === "" || password.value === "") {
      setError("Bad credentials");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      history.push("/");
      alert.success("Successfully logged in!");
    } catch (error: any) {
      alert.error("User not found.");
      return;
    }
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) return <Redirect to="/" />;

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
          <Input type="email" id="email" />
        </Grid>
        <Grid item lg={3} md={6} sm={8} xs={10} margin="0 auto">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" />
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
});

export default LoginForm;
