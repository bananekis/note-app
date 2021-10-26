import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { P } from "../views/Notes";
import { RootState } from "../../state/index";
import { actionCreators } from "../../state/index";
import { bindActionCreators } from "redux";
import { color } from "../../colors";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useRef } from "react";
import styled from "styled-components";

export const DivForm = styled.div`
  display: block;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: block;
  text-align: start;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  background-color: ${color.gainsboro};
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  height: 200px;
  resize: none;
  border-radius: 5px;
  background-color: ${color.gainsboro};
  word-break: break-all;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 0.9em;
  width: 20%;
  outline: none;
  border: none;
  border-radius: 5px;
  color: ${color.white};
  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 0.7em;
  }

  @media (max-width: 800px) {
    font-size: 0.6em;
  }

  @media (max-width: 420px) {
    font-size: 0.5em;
  }

  @media (max-width: 320px) {
    font-size: 0.4em;
  }
`;

const selectForm = (state: RootState) => state.form;

const CreateNote = () => {
  const formState = useSelector(selectForm);
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { setTag, setBody, setTitle, setArticles, setId } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  const handleBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setId(Math.floor(Math.random() * 1000));

    setArticles(formState);
    setTitle("");
    setTag("");
    setBody("");

    history.push("/");

    alert.success("note added!");
  };

  return (
    <Grid container>
      <Grid item xs={12} textAlign="center">
        <h1>Creating note...</h1>
      </Grid>
      <Grid item xs={12} textAlign="center" margin="0 auto">
        <DivForm>
          <form onSubmit={handleSubmit}>
            <Grid item lg={6} md={6} sm={6} xs={10} margin="0 auto" mb={2}>
              <Label htmlFor="title">Note Title</Label>
              <Input
                type="text"
                id="title"
                onChange={handleTitle}
                value={formState.title}
                required
              />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={10} margin="0 auto" mb={2}>
              <Label htmlFor="tag">Note Tag (optional)</Label>
              <Input
                type="text"
                id="tag"
                onChange={handleTag}
                value={formState.tag}
                placeholder="#"
              />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={10} margin="0 auto" mb={2}>
              <Label htmlFor="body">Note Body</Label>
              <TextArea
                id="body"
                onChange={handleBody}
                value={formState.body}
                required
              />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={10}
              margin="0 auto"
              textAlign="end"
            >
              <Button
                style={{
                  backgroundColor: color.black,
                  marginRight: "1em",
                }}
                type="submit"
              >
                <P>save</P>
              </Button>
              <Link to="/">
                <Button style={{ backgroundColor: color.navy }}>
                  <P>cancel</P>
                </Button>
              </Link>
            </Grid>
          </form>
        </DivForm>
      </Grid>
    </Grid>
  );
};

export default CreateNote;
