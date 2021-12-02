import { AuthContext } from "../auth/AuthProvider";
import { Button, Input, Label } from "./CreateNote";
import { FormEvent, useContext, useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Redirect, withRouter } from "react-router";
import { auth } from "../../firebaseConfig";
import { color } from "../../colors";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAlert } from "react-alert";

export const RegisterForm = withRouter(({ history }) => {
  const [error, setError] = useState<string>("");
  const alert = useAlert();

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password }: any = e.currentTarget.elements;

    if (email.value === "" || password.value === "") {
      setError("Bad credentials");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      history.push("/");
      alert.success("registered!");
    } catch (error: any) {
      alert.error("error: " + error);
    }
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) return <Redirect to="/" />;

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
          <Button
            style={{ backgroundColor: color.black, marginRight: "1em" }}
            type="submit"
          >
            register
          </Button>
          <Link to="/login">
            <Button style={{ backgroundColor: color.black }}>log in</Button>
          </Link>
        </Grid>
      </form>
    </>
  );
});
