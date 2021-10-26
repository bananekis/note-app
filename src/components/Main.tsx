import { DivCreate, DivSignOut, DivWrapper, Img } from "../App";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Route, useLocation } from "react-router";
import { SearchBar } from "./smart_component/SearchBar";
import { auth } from "../firebaseConfig";
import { getArticleSlug } from "../functions/getArticleSlug";
import { signOut } from "@firebase/auth";
import { useAlert } from "react-alert";
import CreateNote from "./smart_component/CreateNote";
import EditNote from "./smart_component/EditNote";
import Notes from "./views/Notes";
import SearchNote from "./views/SearchNote";
import TagNotes from "./views/TagNotes";
import Tags from "./views/Tags";
import plus from "../assets/svg/plus.svg";
import signout from "../assets/svg/signout.svg";
import tag from "../assets/svg/tag.svg";

export const Main = () => {
  const location = useLocation();
  const slug = getArticleSlug(location, 1);
  const alert = useAlert();

  return (
    <DivWrapper>
      {slug === "" || slug === "search" ? (
        <>
          <Grid container justifyContent="center">
            <Grid item xs={12} textAlign="center">
              <h1>Notes</h1>
            </Grid>
            <Grid item lg={12} md={10} sm={10} xs={8} textAlign="center">
              <SearchBar />
            </Grid>
          </Grid>
          {/* notes */}
          <Grid container columns={10} justifyContent="center">
            <Route path="/" exact>
              <Notes />
            </Route>
            <Route path="/search">
              <SearchNote />
            </Route>
          </Grid>
          {/* icons */}
          <DivCreate>
            <Link to="/tags" style={{ marginRight: "1em" }}>
              <Img src={tag} alt="tag" />
            </Link>
            <Link to="/create">
              <Img src={plus} alt="add" />
            </Link>
          </DivCreate>
          <DivSignOut>
            <Link to="/">
              <Img
                src={signout}
                alt="signout"
                onClick={() => {
                  signOut(auth);
                  alert.success("Signed out!");
                }}
              />
            </Link>
          </DivSignOut>
        </>
      ) : (
        ""
      )}
      <Route exact path="/create">
        <CreateNote />
      </Route>
      <Route exact path="/edit/:id">
        <EditNote />
      </Route>
      <Route exact path="/tags">
        <Tags />
      </Route>
      <Route exact path="/tags/:id">
        <TagNotes />
      </Route>
    </DivWrapper>
  );
};
