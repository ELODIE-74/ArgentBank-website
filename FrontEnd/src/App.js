import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importez vos pages
import Home from "./pages/home/home";
import Signin from "./pages/signin/signin";
import User from "./pages/user/user";
import Error404 from "./pages/error404/error404";

//import style
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
