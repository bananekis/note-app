import { AuthContext } from "./AuthProvider";
import { Redirect, Route, RouteComponentProps } from "react-router";
import { useContext } from "react";

type RouteProps = {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  path: string;
};

const PrivateRoute = ({ component: RouteComponent, ...rest }: RouteProps) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
