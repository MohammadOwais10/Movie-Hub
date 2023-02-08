import "./App.css";
import Movie from "./Component.js/Home/Movie";
import MovieDetail from "./Component.js/Home/MovieDetail";
import Header from "./Component.js/Layout/Header";
import Login from "./Component.js/Account/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
