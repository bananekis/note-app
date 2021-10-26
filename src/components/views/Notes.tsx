import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { RootState } from "../../state/reducers";
import { color } from "../../colors";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const DivNote = styled.div`
  background-color: ${color.gainsboro};
  padding: 20px;
  margin: 0 1em 1em 0;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 420px) {
    margin: 0 0 1em 0;
  }
`;

export const P = styled.p`
  overflow-wrap: break-word;
  margin: 0;

  @media (max-width: 430px) {
    font-size: 1.3em;
  }
`;

export const A = styled(Link)`
  text-decoration: none;
  color: ${color.black};
  list-style: none;
`;

const selectArticles = (state: RootState) => state.articles;

const Notes = () => {
  const articlesState = useSelector(selectArticles);

  if (articlesState.length !== 0) {
    return (
      <>
        {articlesState.map((article) => (
          <Grid item lg={3} md={4} sm={4} xs={6} key={article.id}>
            <A to={`/edit/${article.id}`}>
              <DivNote>
                {article.tag !== "" ? <h6>Tag: {article.tag}</h6> : ""}
                <h3>{article.title}</h3>
                <p>{article.body}</p>
              </DivNote>
            </A>
          </Grid>
        ))}
      </>
    );
  } else return <div>You should add a note.</div>;
};

export default Notes;
