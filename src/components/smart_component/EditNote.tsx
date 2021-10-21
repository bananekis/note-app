import { Button, DivForm, Input, Label, TextArea } from "./CreateNote";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { P } from "../views/Notes";
import { RootState } from "../../state/reducers";
import { actionCreators } from "../../state";
import { bindActionCreators } from "redux";
import { color } from "../../colors";
import { getArticleSlug } from "../../functions/getArticleSlug";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";

const selectArticles = (state: RootState) => state.articles;

const EditNote = () => {
  const location = useLocation();
  const history = useHistory();
  const articlesState = useSelector(selectArticles);
  const dispatch = useDispatch();

  const editingArticle = articlesState.find(
    (object) => object.id === +getArticleSlug(location, 2)
  );

  const { editTag, editTitle, editBody, removeArticle } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    editTitle(e.target.value, +getArticleSlug(location, 2));
  };

  const handleTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    editTag(e.target.value, +getArticleSlug(location, 2));
  };

  const handleBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    editBody(e.target.value, +getArticleSlug(location, 2));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    history.push("/");

    alert("done");
  };

  const handleDelete = () => {
    if (confirm("you sure?")) {
      removeArticle(+getArticleSlug(location, 2));
      history.push("/");
    } else history.push("/");
  };

  return (
    <Grid container>
      <Grid item xs={12} textAlign="center">
        <h1>Editing note...</h1>
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
                value={editingArticle?.title}
                required
              />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={10} margin="0 auto" mb={2}>
              <Label htmlFor="tag">Note Tag (optional)</Label>
              <Input
                type="text"
                id="tag"
                onChange={handleTag}
                value={editingArticle?.tag}
                placeholder="#"
              />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={10} margin="0 auto" mb={2}>
              <Label htmlFor="body">Note Body</Label>
              <TextArea
                id="body"
                onChange={handleBody}
                value={editingArticle?.body}
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
                style={{ backgroundColor: color.red }}
                onClick={handleDelete}
              >
                delete
              </Button>
              <Button
                style={{
                  backgroundColor: color.black,
                  marginRight: "1em",
                  marginLeft: "37%",
                }}
                type="submit"
              >
                save
              </Button>
              <Link to="/">
                <Button style={{ backgroundColor: color.navy }}>cancel</Button>
              </Link>
            </Grid>
          </form>
        </DivForm>
      </Grid>
    </Grid>
  );
};

export default EditNote;
