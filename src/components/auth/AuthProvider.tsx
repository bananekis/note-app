import { auth } from "../../firebaseConfig";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

type Props = {
  children: JSX.Element;
};

export const AuthContext = createContext<any>({});

export const AuthProvider = (props: Props) => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
