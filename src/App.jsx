import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./styles/reset.scss";
import Home from "./pages/Home";
import { useEffect } from "react";
import { checkSession } from "./redux/auth/auth.actions";
import Login from "./pages/Login";
import Details from "./pages/Details";
import Newpost from "./pages/Newpost";


function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    token && dispatch(checkSession(token, navigate));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/post/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newRecipe" element={<Newpost/>}/>
      </Routes>
    </div>
  );
}

export default App;
