import { A, DivNote, P } from "./Notes";
import { DivCreate, Img } from "../../App";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { RootState } from "../../state/reducers";
import { getArticleSlug } from "../../functions/getArticleSlug";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material";
import back from "../../assets/svg/back.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

const selectArticles = (state: RootState) => state.articles;

const TagNotes = () => {
  const articlesState = useSelector(selectArticles);
  const location = useLocation();
  const slug = getArticleSlug(location, 2);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const filtered = articlesState.filter((article) => article.tag === slug);

  if (filtered.length !== 0) {
    return (
      <>
        <Grid container>
          <Grid item xs={12} textAlign="center">
            <h1>#{slug} Tag notes</h1>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          {filtered.map((article) => (
            <Grid
              item
              lg={3}
              md={4}
              sm={4}
              xs={10}
              key={article.id}
              margin={matches ? "" : "0 auto"}
            >
              <A to={`/edit/${article.id}`}>
                <DivNote>
                  {article.tag !== "" ? <h6>Tag: {article.tag}</h6> : ""}
                  <h3>{article.title}</h3>
                  <P>{article.body}</P>
                </DivNote>
              </A>
            </Grid>
          ))}
        </Grid>

        <DivCreate>
          <Link to="/tags">
            <Img src={back} alt="back" />
          </Link>
        </DivCreate>
      </>
    );
  } else
    return (
      <>
        <Grid item xs={12} textAlign="center">
          <h1>No Tag notes found.</h1>
        </Grid>
        <DivCreate>
          <Link to="/tags">
            <Img src={back} alt="back" />
          </Link>
        </DivCreate>
      </>
    );
};

export default TagNotes;
