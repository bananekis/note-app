import { Main } from "./components/Main";
import { RegisterForm } from "./components/smart_component/RegisterForm";
import { Route } from "react-router-dom";
import AuthProvider from "./components/auth/AuthProvider";
import LoginForm from "./components/smart_component/LoginForm";
import PrivateRoute from "./components/auth/PrivateRoute";
import styled from "styled-components";

export const DivWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

export const DivFixed = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
`;

export const DivCreate = styled(DivFixed)`
  bottom: 10%;
  right: 21%;
`;

export const DivSignOut = styled(DivFixed)`
  bottom: 10%;
  right: 76%;

  @media (max-width: 430px) {
    right: 69%;
    bottom: 10.5%;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

function App() {
  return (
    <AuthProvider>
      <>
        <PrivateRoute path="/" component={Main} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
      </>
    </AuthProvider>
  );
}

export default App;
