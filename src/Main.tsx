import { DivCreate, DivWrapper, Img } from "./App";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Route, useLocation } from "react-router";
import { SearchBar } from "./components/smart_component/SearchBar";
import { getArticleSlug } from "./functions/getArticleSlug";
import CreateNote from "./components/smart_component/CreateNote";
import EditNote from "./components/smart_component/EditNote";
import Notes from "./components/views/Notes";
import SearchNote from "./components/views/SearchNote";
import TagNotes from "./components/views/TagNotes";
import Tags from "./components/views/Tags";
import plus from "./assets/svg/plus.svg";
import tag from "./assets/svg/tag.svg";

export const Main = () => {
  const location = useLocation();
  const slug = getArticleSlug(location, 1);

  return (
    <DivWrapper>
      {/* main */}
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
          <DivCreate>
            <Link to="/tags" style={{ marginRight: "1em" }}>
              <Img src={tag} alt="tag" />
            </Link>
            <Link to="/create">
              <Img src={plus} alt="add" />
            </Link>
          </DivCreate>
        </>
      ) : (
        ""
      )}
      <Route path="/create">
        <CreateNote />
      </Route>
      <Route path="/edit">
        <EditNote />
      </Route>
      <Route path="/tags" exact>
        <Tags />
      </Route>
      <Route path="/tags/:id">
        <TagNotes />
      </Route>
    </DivWrapper>
  );
};
