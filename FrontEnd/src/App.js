import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importez vos pages
import Home from "./pages/home/home";
import Signup from "./pages/signup/signup";
import User from "./pages/user/user";

//import style
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
