import { A, DivNote, P } from "./Notes";
import { Grid } from "@mui/material";
import { RootState } from "../../state/reducers";
import { useSelector } from "react-redux";

const selectSearch = (state: RootState) => state.search;
const selectArticles = (state: RootState) => state.articles;

const SearchNote = () => {
  const searchState = useSelector(selectSearch);
  const articlesState = useSelector(selectArticles);

  const filteredResults = articlesState.filter(
    (obj) =>
      obj.title.toLowerCase().indexOf(searchState.toLowerCase()) > -1 ||
      obj.body.toLowerCase().indexOf(searchState.toLowerCase()) > -1
  );

  if (filteredResults.length !== 0) {
    return (
      <>
        {filteredResults.map((article) => (
          <Grid item xs={3} key={article.id}>
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
  } else return <div>No Results found.</div>;
};

export default SearchNote;
