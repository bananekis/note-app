import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { RootState } from "../../state/reducers";
import { color } from "../../colors";
import { useSelector } from "react-redux";
import Note from "../dumb_component/Note";
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

export const H3 = styled.h3`
  margin: 0;
`;

export const PNote = styled.p`
    border: 1px solid ${color.lightGrey};
    padding: 10px;
    border-radius: 5px;
    word-wrap: break-word;
    white-space: break-spaces;
`;

export const SpanNote = styled.span`
  display:block;
`;

export const DivNoteHeading = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`;

export const H2 = styled.h2`
  margin: 0;
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
              <Note article={article}/>
            </A>
          </Grid>
        ))}
      </>
    );
  } else return <div>You should add a note.</div>;
};

export default Notes;
