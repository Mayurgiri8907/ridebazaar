import { useState, useEffect } from "react";
import Login from "./components/Login";
import Main from "./components/Main";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

 useEffect(() => {
  const admin = localStorage.getItem("token");
  setIsAuth(!!admin); // ✅ true if token exists
}, []);

  return (
    <>
      {isAuth ? (
        <Main setIsAuth={setIsAuth} />
      ) : (
        <Login setIsAuth={setIsAuth} />
      )}
    </>
  );
}