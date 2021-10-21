import { actionCreators } from "../../state";
import { bindActionCreators } from "redux";
import { color } from "../../colors";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
  width: 91%;
  height: 70%;
  border: none;
  outline: none;
  background-color: ${color.gainsboro};
  padding: 0px 50px;
  border-radius: 5px;
  font-size: 0.9em;
  @media (max-width: 800px) {
    width: 85%;
  }
  @media (max-width: 550px) {
    width: 70%;
  }
  @media (max-width: 420px) {
    width: 64%;
  }
  @media (max-width: 320px) {
    width: 54%;
  }
`;
const SVGSearch = styled.svg`
  position: relative;
  right: 47%;
  fill: #97999b;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  top: -64%;

  @media (max-width: 550px) {
    right: 41%;
  }
`;

export const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { setSearchVal } = bindActionCreators(actionCreators, dispatch);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);

    if (e.target.value === "") {
      history.push("/");
    } else history.push("/search");
  };

  return (
    <>
      <Input type="text" placeholder="Search notes..." onChange={handleInput} />
      <SVGSearch id="search-icon" className="search-icon" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </SVGSearch>
    </>
  );
};
