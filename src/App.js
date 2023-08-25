import SignUp from "./Pages/SignUp";
import { Route,Routes } from "react-router-dom";
import "./style.scss";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
function App() {
  return (
    <Routes>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
  );
}

export default App;
