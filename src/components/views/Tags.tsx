import { A } from "./Notes";
import { DivCreate, Img } from "../../App";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { RootState } from "../../state/reducers";
import { color } from "../../colors";
import { useSelector } from "react-redux";
import back from "../../assets/svg/back.svg";
import styled from "styled-components";

const DivTag = styled.div`
  background-color: ${color.gainsboro};
  border-radius: 5px;
  padding: 5px;
  margin-right: 1em;
  margin-bottom: 1em;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background-color: ${color.lightBlack};
  }
`;

const selectArticles = (state: RootState) => state.articles;

const Tags = () => {
  const articlesState = useSelector(selectArticles);

  const filtered = articlesState.filter((article, index) => article.tag !== "");

  return (
    <>
      <Grid container>
        <Grid item xs={12} textAlign="center">
          <h1>Available tags</h1>
        </Grid>
      </Grid>
      {filtered.length !== 0 ? (
        <Grid container justifyContent="center">
          {filtered.map((article) => {
            return (
              <Grid
                item
                lg={3}
                md={8}
                sm={8}
                xs={8}
                textAlign="center"
                key={article.id}
              >
                <A to={`/tags/${article.tag}`}>
                  <DivTag>#{article.tag}</DivTag>
                </A>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Grid item xs={12} textAlign="center">
          No Tags found.
        </Grid>
      )}
      <DivCreate>
        <Link to="/">
          <Img src={back} alt="back" />
        </Link>
      </DivCreate>
    </>
  );
};

export default Tags;
