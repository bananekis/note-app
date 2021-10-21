import { Main } from "./Main";
import { RegisterForm } from "./components/smart_component/RegisterForm";
import { getArticleSlug } from "./functions/getArticleSlug";
import { useLocation } from "react-router-dom";
import LoginForm from "./components/smart_component/LoginForm";
import styled from "styled-components";

export const DivWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

export const DivCreate = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 10%;
  right: 21%;
`;

export const Img = styled.img`
  width: 100%;
`;

function App() {
  const location = useLocation();
  const slug = getArticleSlug(location, 1);

  return (
    <>
      {slug !== "register" ? (
        <LoginForm>
          <Main />
        </LoginForm>
      ) : (
        <RegisterForm />
      )}
    </>
  );
}

export default App;
