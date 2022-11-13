import { Route, Routes, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import "./styles/reset.scss";
import Home from "./pages/Home";
import { useEffect } from "react";
import { checkSession } from './redux/auth/auth.actions';
import Login from "./pages/Login";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    token && dispatch(checkSession(token, navigate));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
