import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import HomeLogin from "./pages/homeLogin";
import CardObjek from "./components/card/cardObjek";
import Login from "./pages/LogReg/Login";
import Regis from "./pages/LogReg/Regis";
import AboutPage from "./pages/about";

//admin
import DashAdmin from "./pages/admin pages/dasboardadmin";
import Music from "./pages/admin pages/musicadmin";
import DataUser from "./pages/admin pages/datauseradmin";
import Setting from "./pages/admin pages/settingadmin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeLogin />} />
        <Route path="/card" element={<CardObjek />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regis />} />
        <Route path="/About" element={<AboutPage />} />


        //admin
        <Route path="/dashadmin" element={<DashAdmin />} />
        <Route path="/materi" element={<Music />} />
        <Route path="/dataUser" element={<DataUser />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
